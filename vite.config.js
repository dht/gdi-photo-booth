import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

const cwd = path.resolve(process.cwd(), '../');

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: true,
    },
    plugins: [
        tsconfigPaths({
            loose: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@gdi/app-mixer': `${cwd}/gdi-app-mixer/src`,
            '@gdi/store-business-base': `${cwd}/gdi-store-business-base/src`,
            '@gdi/store-mixer': `${cwd}/gdi-store-mixer/src`,
            '@gdi/platformer': `${cwd}/platformer/src`,
            '@gdi/template-gdi': `${cwd}/gdi-template-gdi/src`,
            '@gdi/web-base-ui': `${cwd}/gdi-web-base-ui/src`,
            '@gdi/web-ui': `${cwd}/gdi-web-ui/src`,
            '@gdi/web-forms': `${cwd}/gdi-web-forms/src`,
            igrid: `${cwd}/igrid/src`,
        },
    },
    define: {},
    server: {
        host: true,
        port: 5000,
    },
});
