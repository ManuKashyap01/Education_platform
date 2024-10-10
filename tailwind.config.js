/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61",    // Coral (bright)
        secondary: "#FFD700",  // Gold (bright)
        light: "#40E0D0",      // Turquoise (bright)
        dark: "#2C3E50",       // Dark Slate (dark)
        dark2: "#1C1C1C",      // Black Pearl (dark)
      },
      container: {
        center: true,  // Center the container
        padding: {
          DEFAULT: "1rem",  // Default padding
          sm: "2rem",  // Small screen padding
          lg: "4rem",  // Large screen padding
          xl: "5rem",  // Extra-large screen padding
          "2xl": "6rem",  // 2x extra-large screen padding
        },
      },
    },
  },
  plugins: [],
};

