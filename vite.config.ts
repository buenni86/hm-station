import { defineConfig } from "vite";
import { getMapsOptimizers, getMapsScripts } from "wa-map-optimizer-vite";

export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            input: {
                index: "./index.html",
                web_station_sign: "./src/customStationSign/web_station_sign.html",
                result_importance: "./src/result_importance.html",
                result_location: "./src/result_location.html",
                ...getMapsScripts("./maps"),
            },
        },
    },
    plugins: [...getMapsOptimizers(undefined, "./maps")],
    server: {
        host: "localhost",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "Cache-Control": "no-cache, no-store, must-revalidate",
        },
        open: "/",
    },
});
