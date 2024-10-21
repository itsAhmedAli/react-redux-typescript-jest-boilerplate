import { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  darkMode: ["class"],
  theme: { extend: {} },
  plugins: [],
};

module.exports = config;
