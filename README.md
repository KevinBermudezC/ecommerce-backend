# Ecommerce Backend API

A RESTful API backend for an e-commerce application built with Express.js.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create environment files:
   - `.env.development.local` for development
   - `.env.production.local` for production

Example environment variables:
```env
PORT=3000
NODE_ENV=development
```

## Available Scripts

- `npm start`: Run in production mode
- `npm run dev`: Run in development mode with hot-reload

## API Routes

### Authentication

- `POST /auth/sign-up` - Register a new user
- `POST /auth/sign-in` - Login user
- `POST /auth/sign-out` - Logout user

### Base URL

- Development: `http://localhost:3000`

## Project Structure

```
ecommerce-backend/
├── config/
│   └── env.js
├── middlewares/
│   └── error.middleware.js
├── routes/
│   └── auth.routes.js
├── app.js
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
