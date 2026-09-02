# Localhost Development Server Restart Rule

## Core Directive
Whenever you make any change to code files (pages, components, CSS, configurations) or public static assets (images, fonts):
1. Stop any currently running Next.js dev server task.
2. Kill any lingering process listening on port 3000 (`lsof -i :3000`).
3. Restart `npm run dev` in daemon mode so the server is freshly started on `http://localhost:3000`.
4. Ensure the website loads without stale cache issues.
