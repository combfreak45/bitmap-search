/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        v1: "#B4B4B8",
        v2: "#C7C8CC",
        v3: "#E3E1D9",
        v4: "#F2EFE5",
      },
    },
  },
  plugins: [],
};
