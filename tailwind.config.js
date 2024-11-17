/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'profile-image': "url('/profile.webp')"
      },
      container: {
        center: true,
        padding: '1rem',
      },
      height: {
        'container': '1200px',
      },
      screens: {
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
};
