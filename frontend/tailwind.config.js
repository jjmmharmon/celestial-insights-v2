/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        uncial: ["Uncial Antiqua", "system-ui"],
      },
      backgroundImage: {
        aquarius: "url('/src/assets/images/avatars/avatar_aquarius.jpg')",
        celestial:
          "url('/src/assets/images/backgrounds/celestial-background.jpg')",
        galaxy: "url('/src/assets/images/backgrounds/large-galaxy.jpg')",
      },
    },
  },
  plugins: [],
};
