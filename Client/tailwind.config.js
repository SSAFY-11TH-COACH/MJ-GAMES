/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        geist: ['GeistMono', 'monospace'],
        cliff: ['Greycliff CF', 'monospace'],
        eastarjet: ['EASTARJET', 'sans-serif'],
        sdsamlip: ['SDSamliphopangche', 'sans-serif'],
        jersey: ['"Jersey 10"', 'sans-serif'],
        hanalei: ['Hanalei Fill', 'monospace'],
        Caveat: ['Caveat Brush', 'cursive'],
      },
    },
  },
  plugins: [],
}

