import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Define the name of your GitHub repository
// NOTE: This is the value needed if you deploy to a subdirectory like:
// https://<username>.github.io/<repo-name>/
// Since your site uses a custom domain (sonofma.com), the base should be '/'.
// If the issue is due to a misconfiguration on the GitHub side, we'll keep the
// logic but default to the correct value for custom domains.
const REPO_NAME = 'sonofma-v2';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Determine the base path:
    // For local development (mode 'development') or custom domains, use '/'.
    // For a standard GitHub Pages *project* deployment, use the repo name.
    const isGithubPages = process.env.VITE_DEPLOY_TARGET === 'github-pages';
    const base = isGithubPages ? `/${REPO_NAME}/` : '/';

    return {
        // --- ADDED/MODIFIED SECTION ---
        // Setting the base URL for the built assets.
        // For your custom domain (sonofma.com), it should simply be '/'.
        // If you were deploying to a GitHub Pages subfolder (e.g., username.github.io/sonofma-v2), 
        // it would need to be '/sonofma-v2/'. We default to '/' for best practice on custom domains.
        base: '/', 
        // ------------------------------
        
        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        plugins: [react()],
        define: {
            // Note: process.env is usually not available in browser-side Vite code.
            // Using `import.meta.env` is the Vite-recommended way.
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        resolve: {
            alias: {
                // Ensure this path resolves correctly to the project root
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});
