import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1115",
        panel: "#171A21",
        panel2: "#1D212B",
        border: "#2A2F3A",
        offwhite: "#E8E6E1",
        muted: "#8B8F98",
        amber: "#E8A33D",
        amberdim: "#B87F2C",
        wire: "#4F7CFF",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "72ch",
      },
    },
  },
  plugins: [],
};
export default config;