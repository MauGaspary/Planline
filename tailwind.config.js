/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "triider-primary": {
          "orange-dark": "#DC6A1D",
          "orange1": "#FF6600",
          "orange2": "#F07E31",
          "orange3": "#F8CCA4",
          "orange4": "#EC4329"
        },
        "triider-secondary": {
          "purple1": "#5B29F5",
          "purple2": "#3E81F7",
          "purple3": "#4983EF",
          "purple4": "#95B8F9",
          "purple5": "#426793"
        },
        "triider-helper": {
          "green1": "#30626B",
          "green2": "#63C7BF",
          "green3": "#59BC5C",
          "pink-light": "#ED6564"
        },
        "triider-alert": {
          "red": "#D83430",
          "yellow": "#F1BF3E"
        },
        "triider-grayscale": {
          "gray1": "#565656",
          "gray2": "#A1A1A1",
          "gray3": "#CBCBCB",
          "gray4": "#EEEEEE",
          "gray5": "#FBFBFB",
          "white": "#FFFFFF",
          "black": "#1D1D1D"
        }
      }
    },
  },
  plugins: [],
}

