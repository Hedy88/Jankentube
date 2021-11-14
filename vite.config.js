import legacy from "@vitejs/plugin-legacy"
import { defineConfig } from "vite"

export default defineConfig({
    root: "./src",
    plugins: [
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
    ],
})
