/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /bg-(red|green|blue|indigo|orange|yellow)-(100|200|300|400|500|600|700|800|900)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
    {
      pattern:
        /outline-(red|green|blue|indigo|orange|yellow)-(100|200|300|400|500|600|700|800|900)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
  ],
};
