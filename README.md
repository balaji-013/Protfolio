# Portfolio Angular Project

This workspace has been converted into an Angular application.

## Project structure

- `src/` — Angular application source files
- `src/app/` — main component and module
- `src/styles.css` — global styles migrated from the existing site
- `src/index.html` — Angular entrypoint

## Run locally

1. Install dependencies:

```bash
npm install --legacy-peer-deps
```

2. Start the development server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

## Notes

- The original static files (`index.html`, `style.css`, `script.js`) remain in the workspace as a reference.
- Dependency installation may fail if there is insufficient disk space on the machine.
