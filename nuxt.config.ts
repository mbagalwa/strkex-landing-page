import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  runtimeConfig: {},
  devServer: {
    port: Number(process.env.PORT),
  },
  devtools: { enabled: true },
  modules: [
    "motion-v/nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "shadcn-nuxt",
  ],
  icon: {
    serverBundle: {
      collections: ["hugeicons", "mage", "solar"],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    priority: ["Space Grotesk", "Manrope"],
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      {
        name: "Inter",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      {
        name: "Space Grotesk",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700],
      },
      {
        name: "Manrope",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700, 800],
      },
    ],
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
