import { defineConfig } from 'vite';

// The Pages workflow sets VITE_BASE_PATH to /<repository>/ for project pages.
export default defineConfig({ base: process.env.VITE_BASE_PATH || '/' });
