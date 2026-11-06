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
npm run format       # Format supported project files with Prettier
npm run format:check # Check formatting without changing files
```

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
