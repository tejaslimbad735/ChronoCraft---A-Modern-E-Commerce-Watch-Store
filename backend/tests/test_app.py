import pytest
from backend.app import app


def test_health(client):
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json == {"status": "ok"}


def test_signup_and_login(client):
    # Clean DB for deterministic test (in-memory not configured; rely on unique email)
    signup_data = {"name": "Test User", "email": "testuser@example.com", "password": "password123"}
    r = client.post("/api/signup", json=signup_data)
    assert r.status_code in (201, 409)

    login_data = {"email": "testuser@example.com", "password": "password123"}
    r2 = client.post("/api/login", json=login_data)
    assert r2.status_code == 200
    assert r2.json["message"] == "login successful"
