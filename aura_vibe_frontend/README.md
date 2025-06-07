# My AuraGram – AuraVibe Frontend

This project is the React.js frontend for "My AuraGram" – a next-gen, vibe-centric, Instagram-inspired social platform.

## Features

- **Authentication:** Email & Google login (Firebase/Auth0 UI stubs)
- **Profile Management:** Avatar, bio, username, theme & palette customization
- **Media:** Image/video post UI (upload, caption, hashtag, mood filter stubs)
- **Feed & Explore:** Vibrant, animated posts, trending & explore pages
- **Engagement:** Like, comment, save, follow, real-time notification UI
- **Stories:** Story bar, create & view stories, animated transitions
- **Direct Messaging:** DM UI, real-time ready
- **Admin Dashboard:** Moderate reports/content (UI only)
- **Dark/Light Mode:** Theme toggle (global, persistent)
- **Responsive:** Desktop (left menu), mobile (bottom tab), transitions, accessibility
- **Bonus Placeholders:** Audio reels, AI caption/hashtag, filter suggestions, post scheduling, profile themes
- **Fully Custom Tailwind:** Times New Roman everywhere, black background, white text default

## Getting Started

- Install dependencies: `npm install`
- Run app: `npm start`
- Run tests: `npm run test`
- Build: `npm run build`

## Customization

Global typography and color is set via Tailwind (`tailwind.config.js`) for brand consistency (Times New Roman, black bg, white text).

## Structure

- `/src/components` — UI and feature modules (Auth, Feed, Stories, ...).
- `/src/pages` — Next/router-like pages (Feed, Explore, Profile, Admin).
- `/src/contexts` — Theme/Auth providers.
- `/src/hooks` — Feature and UI hooks.
