import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
    root: "./src",
    plugins: [
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
        eslintPlugin(),
    ]
} + (process.env.GP ? { server: { hmr: false } } : {}));
