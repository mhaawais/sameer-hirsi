import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.7s ease-out forwards",
        fadeUp: "fadeUp 0.6s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.7s ease-out forwards",
      },
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myred: "#DE0713",
        onhover: "#f51307",
      },
    },
  },
  plugins: [],
};

export default config;





// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {

//       // keyframes: {
//       //   'slide-in': {
//       //     '0%': { transform: 'translateX(-100%)', opacity: '0' },
//       //     '100%': { transform: 'translateX(0)', opacity: '1' },
//       //   },
//       //   'fade-in-up': {
//       //     '0%': { opacity: '0', transform: 'translateY(20px)' },
//       //     '100%': { opacity: '1', transform: 'translateY(0)' },
//       //   },
//       // },
//       // animation: {
//       //   'slide-in': 'slide-in 0.8s ease-out forwards',
//       //   'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
//       // },

//       keyframes: {
//         slideIn: {
//           '0%': { transform: 'translateX(-100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         fadeUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//          'fade-in-up': {
//            '0%': { opacity: '0', transform: 'translateY(20px)' },
//            '100%': { opacity: '1', transform: 'translateY(0)' },
//          },
//       },
//       animation: {
//         slideIn: 'slideIn 0.6s ease-out forwards',
//         fadeUp: 'fadeUp 0.5s ease-out forwards',
//        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
//       },

//       fontFamily: {
//         custom: ['MyCustomFont', 'sans-serif'],
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         myred: '#DE0713',
//         onhover: '#f51307',
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
