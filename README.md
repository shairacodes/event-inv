# Save the date

Vite + TypeScript, no framework.

## Run locally
    npm install
    npm run dev

Edit names, date, location and note in the `CONFIG` block at the top of `src/main.ts`.

## Deploy to Cloudflare Pages
1. Push this folder to a GitHub or GitLab repo.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Pick the repo and use these build settings:
   - Framework preset: None (or Vite)
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Save and deploy. You get a `*.pages.dev` URL; add a custom domain under the project's Custom domains tab if you want one.

Every push to your main branch redeploys automatically.
