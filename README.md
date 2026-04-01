# Watch Store

Watch Store is a modern e-commerce storefront for luxury and fashion watches. The project combines a React + TypeScript frontend with Redux state management and a lightweight Flask backend for user signup and login.

## Project Overview

This repo includes:

- A Vite-powered React frontend
- Product browsing for multiple watch categories
- Product detail pages and curated discovery sections
- Cart and favorites state managed with Redux Toolkit
- Login and signup forms connected to a Flask API
- A simple SQLite user database for local auth
- Boutique locations displayed on an interactive Leaflet map

## Features

- Homepage with hero banner, new arrivals, collections, movement categories, and brand showcases
- Shop flow with individual product detail pages
- Dedicated sections for men, women, trending, and new arrivals
- Favorites page for saved watches
- Cart and checkout flow with order confirmation
- Boutique locator with interactive map markers
- Signup and login API backed by SQLite
- Toast notifications and client-side navigation with React Router

## Screenshots

### Home Page

![Home Page](./for%20README/home.png)

### Login Page

![Login Page](./for%20README/login.png)

### Order Summary

![Order Summary](./for%20README/order.png)

### Trending Watches

![Trending Watches](./for%20README/trending.png)

### Boutique Map

![Boutique Map](./for%20README/service.png)

### New Watches

![New Watches](./for%20README/all%20watcch.png)

## Tech Stack

### Frontend

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- React Toastify
- React Leaflet + Leaflet

### Backend

- Python
- Flask
- Flask-CORS
- SQLite

## Project Structure

```text
watch-store/
|-- src/                  # React app source
|   |-- assets/           # Product and showcase data
|   |-- components/       # Reusable UI components
|   |-- pages/            # Route pages
|   |-- store/            # Redux store and slices
|   `-- styles/           # Global styles
|-- public/               # Public images and static assets
|-- backend/              # Flask API and backend tests
|   |-- app.py            # Flask application
|   |-- requirements.txt  # Python dependencies
|   `-- tests/            # Pytest test files
|-- package.json          # Frontend scripts and dependencies
`-- vite.config.ts        # Vite config with API proxy
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Python 3.11+ recommended
- pip

## Frontend Setup

Install frontend dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend runs on the default Vite local server, usually:

```text
http://127.0.0.1:5173
```

## Backend Setup

Open a second terminal in the project root and install backend dependencies:

```bash
pip install -r backend/requirements.txt
```

Run the Flask API:

```bash
python backend/app.py
```

The backend runs at:

```text
http://127.0.0.1:5000
```

On first run, the backend creates a local SQLite database file at `backend/users.db`.

## Frontend and Backend Together

During local development, the frontend can call `/api/...` directly because `vite.config.ts` proxies API requests to the Flask server on port `5000`.

If you want to point the frontend to another backend URL, create a `.env` file and set:

```bash
VITE_API_BASE_URL=http://127.0.0.1:5000
```

## Available Frontend Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## API Endpoints

### Health Check

```http
GET /api/health
```

Response:

```json
{ "status": "ok" }
```

### Signup

```http
POST /api/signup
Content-Type: application/json
```

Request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "strong-password"
}
```

### Login

```http
POST /api/login
Content-Type: application/json
```

Request body:

```json
{
  "email": "jane@example.com",
  "password": "strong-password"
}
```

## Testing

Backend tests are available under `backend/tests`.

Run backend tests with:

```bash
pytest backend/tests
```

The repo also includes frontend component test files under `src/components/__tests__`, but the current `package.json` does not yet include `vitest` as an installed dependency. If you want to run frontend tests, add the required test tooling first.

## Main Routes

- `/` - home page
- `/shop` - product listing
- `/shop/:productId` - product details
- `/cart` - checkout cart
- `/orderplaced` - order confirmation
- `/favorites` - saved products
- `/login` - user login
- `/signup` - user registration
- `/boutiques` - boutique locator map
- `/new` - new collection section
- `/trending` - trending products
- `/new-arrivals/:arrivalId` - new arrival details
- `/men/:menId` - men product details
- `/women/:womenId` - women product details
- `/discover/:section/:itemId` - showcase detail pages
- `/category/:categoryId` - category showcase pages

## Notes

- User authentication in this project is local and intended for development/demo usage.
- Passwords are stored as hashes, not plain text.
- The SQLite database is created automatically by the backend.

## Future Improvements

- Add persistent product/catalog storage from a real database
- Add authenticated sessions or JWT-based auth
- Add order history and user profiles
- Add stronger frontend and backend test coverage
- Add deployment configuration for production environments

## License

This repository currently does not include a license file.
