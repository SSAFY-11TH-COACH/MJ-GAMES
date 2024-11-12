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
        geist: ['GeistMono', 'monospace'], // 커스텀 폰트 설정
      },
    },
  },
  plugins: [],
}

