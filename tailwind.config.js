export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    keyframes: {
      wave: {
        "0%, 100%": { transform: "scale(1)", borderColor: "#D1D5DB" }, // Start and end with light gray
        "50%": { transform: "scale(1.1)", borderColor: "#1F2937" }, // Darker border at midpoint
      },
      'bounce-reverse': {
        '0%, 100%': {
          transform: 'translateY(0)',
        },
        '50%': {
          transform: 'translateY(-0.5rem)', // Adjust bounce intensity
        },
      },
    },
    animation: {
      wave: "wave 3s infinite ease-in-out", // Existing wave animation
      'bounce-reverse': 'bounce-reverse 1s ease-in-out infinite', // New reverse bounce animation
    },
  },
};
export const plugins = [];
