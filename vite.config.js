import { defineConfig } from 'vite'
import { resolve } from 'node:path';
import handlebars from 'vite-plugin-handlebars';

const root = resolve(__dirname, "./src/pages")
const outDir = resolve(__dirname, "dist")

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: [
                resolve(__dirname, 'src/layout'),
                resolve(__dirname, 'src/components'),
                resolve(__dirname, 'src/components/buttons'),
            ],
        }),
    ],
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                create: resolve(root, 'create.html'),
                view: resolve(root, 'view.html'),
            }
        }
    },
})