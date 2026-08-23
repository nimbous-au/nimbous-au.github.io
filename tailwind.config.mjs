/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,md}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        raised: "var(--raised)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-h": "var(--accent-h)",
        "accent-light": "var(--accent-light)",
        dark: "var(--dark)",
        "hero-bg": "var(--hero-bg)",
        "hero-text": "var(--hero-text)",
        "hero-muted": "var(--hero-muted)",
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "var(--max)",
      },
    },
  },
};
