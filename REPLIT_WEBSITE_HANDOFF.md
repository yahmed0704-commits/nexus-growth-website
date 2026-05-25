# Nexus Growth Inc. — Website Handoff

## Overview
This repository contains the Nexus Growth Inc. public website, built as a React + Vite single-page application with React Router.

## Structure
```
website/          ← All website code lives here
├── src/
│   ├── App.tsx            ← Router + layout
│   ├── index.css          ← Tailwind + custom CSS
│   ├── components/
│   │   ├── Navbar.tsx     ← Sticky nav with mobile hamburger
│   │   └── Footer.tsx     ← Full footer with links
│   └── pages/             ← 11 pages
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Team.tsx
│       ├── Projects.tsx
│       ├── UpcomingProjects.tsx
│       ├── Rentals.tsx
│       ├── Gallery.tsx
│       ├── Investor.tsx
│       ├── FAQ.tsx
│       └── Contact.tsx
└── public/
    └── nexus-logo.jpeg    ← Company logo (inverted white in dark nav)
```

## Running Locally
```bash
cd website
npm install
npm start        # Runs on http://localhost:5173
```

## Tech Stack
- React 18 + React Router v6
- Vite 5
- TypeScript 5
- Tailwind CSS 3

## Brand
- Navy: #1B2B4B (dark: #0d1825)
- Gold: #C9912A
- Font: Inter

## Placeholders to Replace
- Team member names, photos, bios
- Phone number
- Email address
- Full office address
- Before/after gallery photos
- Upcoming project addresses
- Completed project names/dates
- Investment minimums and return figures
- Utility details for rental units

## Future Roadmap
- Backend API (express/node)
- Admin dashboard
- Tenant portal (rent payments, maintenance requests)
- Google Sheets / database sync
- AI property tools
- Contact form email delivery (Resend / Nodemailer)
