# Development Workflow & Server Guidelines

## Mandatory Server Restart Rule
- **Always Restart Dev Server After Changes**: After making any modifications to code (components, pages, styling, configurations) or updating static assets in `public/images/`, you MUST stop and restart the local Next.js development server (`npm run dev`) to ensure fresh cache clearing and that the website always loads all changes properly for the user.
- **Port Management**: Ensure the server runs cleanly on `http://localhost:3000` (terminating any orphaned processes on port 3000 before restarting).
