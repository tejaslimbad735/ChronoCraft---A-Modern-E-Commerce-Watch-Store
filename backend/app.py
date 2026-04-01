import sqlite3
from pathlib import Path

from flask import Flask, jsonify, request
from werkzeug.security import check_password_hash, generate_password_hash

try:
    from flask_cors import CORS
except ModuleNotFoundError:
    CORS = None

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "users.db"

app = Flask(__name__)
if CORS is not None:
    CORS(app)


def get_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    with get_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        conn.commit()


init_db()


@app.get("/api/health")
def health():
    return jsonify({"status": "ok"})


@app.post("/api/signup")
def signup():
    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip().lower()
    password = (data.get("password") or "").strip()

    if not name or not email or not password:
        return jsonify({"message": "name, email and password are required"}), 400

    password_hash = generate_password_hash(password)

    try:
        with get_connection() as conn:
            conn.execute(
                "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
                (name, email, password_hash),
            )
            conn.commit()
    except sqlite3.IntegrityError:
        return jsonify({"message": "email already registered"}), 409

    return jsonify({"message": "signup successful"}), 201


@app.post("/api/login")
def login():
    data = request.get_json(silent=True) or {}
    email = (data.get("email") or "").strip().lower()
    password = (data.get("password") or "").strip()

    if not email or not password:
        return jsonify({"message": "email and password are required"}), 400

    with get_connection() as conn:
        row = conn.execute(
            "SELECT id, name, email, password_hash FROM users WHERE email = ?",
            (email,),
        ).fetchone()

    if row is None or not check_password_hash(row["password_hash"], password):
        return jsonify({"message": "invalid email or password"}), 401

    return jsonify(
        {
            "message": "login successful",
            "user": {
                "id": row["id"],
                "name": row["name"],
                "email": row["email"],
            },
        }
    )


if __name__ == "__main__":
    app.run(debug=True)
