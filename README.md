# VIT Aurum — Personal Finance Planner

VIT Aurum is a personal finance planner with an offline-capable browser app and an original Python command-line version. The browser app stores ledger data in that browser profile's local storage; it does not sync data to GitHub or Google.

## Open the web app

Open the live web app: [VIT Aurum on GitHub Pages](https://farhaanamir1104-ops.github.io/VIT-Aurum/). The updated app becomes available when the Pages deployment finishes. To run it locally, see [`web_app/README.md`](web_app/README.md).

## Project layout

- `web_app/` — Vite web app, PWA assets, and Android Capacitor setup.
- `python_app/` — SQLite-backed Python command-line app and standalone HTML copy.
- `.github/workflows/deploy.yml` — builds and deploys the Vite web app to GitHub Pages on pushes to `main`.

## Privacy

The public repository contains application source only. Your app's ledger is stored locally in the browser or installed app and is not part of this repository. Do not commit personal exports, database files, passwords, or signing keys.
