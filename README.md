# 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋

A full-stack application for deploying and managing bots.

## Features

- User authentication (login/register)
- Bot deployment via API
- Bot version updates from GitHub
- Dashboard for managing bots
- Dark theme UI with Tailwind CSS

## Tech Stack

- **Frontend:** Next.js 16, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT
- **Database:** MongoDB

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd samkiel-bot-deployment
   ```

2. Install root dependencies:
   ```bash
   npm install
   ```

3. Set up backend:
   ```bash
   cd backend
   npm install
   ```

4. Set up frontend:
   ```bash
   cd ../frontend
   npm install
   cd ..
   ```

5. Configure environment variables:
   - Copy `.env` and update the values (MongoDB URI, JWT secret, etc.)

6. Run the application:
   ```bash
   npm run dev
   ```

   This will start both the backend (port 5000) and frontend concurrently.

## Scripts

- `npm run dev`: Run both frontend and backend in development mode
- `npm run dev:server`: Run only the backend
- `npm run dev:client`: Run only the frontend
- `npm run build`: Build for production

## API Endpoints

- `POST /api/auth/login`: User login
- `POST /api/auth/register`: User registration
- `POST /api/deploy`: Deploy a bot
- `POST /api/update`: Update bot version

## Project Structure

```
samkiel-bot-deployment/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── lib/
│   └── styles/
├── package.json
├── .env
└── README.md
