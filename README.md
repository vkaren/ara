# Ara

Ara is a social web application for sharing posts, replies and conversations.
The frontend uses Next.js 14 with the Pages Router, React, Material UI and Joi.

## Requirements

- Node.js 18 or newer
- npm
- A running Ara API

## Setup

Install dependencies:

```bash
npm install
```

Create a local environment file from the example and set the API URL:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Commands

```bash
npm run dev          # Start the development server on port 3001
npm run build        # Create a production build
npm start            # Serve the production build on port 3001
npm run lint         # Run Next.js ESLint checks
npm run typecheck    # Check TypeScript types without emitting files
npm run format       # Format supported project files with Prettier
npm run format:check # Check formatting without changing files
```

## Authentication

The public authentication routes are:

- `/login` — sign in with username and password.
- `/` — create an account with nickname, username, email and password.
- `/forgot-password` — request a password reset email.
- `/reset-password?token=<TOKEN>` — set a new password using the token from the email.

The frontend calls the following API endpoints:

- `POST /auth/login`
- `POST /auth/forgot-password` with `{ "email": "..." }`
- `POST /auth/reset-password` with `{ "token": "...", "password": "..." }`
- `POST /user` for account creation, including the required `email` field.

Password reset tokens are expected to be 64 characters long and expire after one
hour. The API intentionally returns the same response for existing and
non-existing email addresses.

## Project structure

- `src/pages`: Next.js routes and server-side data loading.
- `src/components`: reusable UI components.
- `src/containers`: feature-level UI and page composition.
- `src/context`: shared user, theme, app and socket state.
- `src/utils`: API, cookies, file and date helpers.
- `src/validation`: Joi schemas and validation helpers.
- `src/theme`: Material UI theme configuration.
- `public`: images, icons and fonts.

## Environment variables

`NEXT_PUBLIC_API_URL` is required for API requests, Socket.IO and remote user
images. Do not commit `.env` files or credentials.

Password recovery also requires the backend database migration and SMTP
configuration. Existing users must have an email associated with their account
before they can request a password reset.
