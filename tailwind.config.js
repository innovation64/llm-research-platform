module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#2563eb", // blue-600
          secondary: "#1e3a8a", // blue-900
          accent: "#3b82f6", // blue-500
          light: "#f8fafc", // slate-50
          dark: "#0f172a", // slate-900
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
          mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
        },
      },
    },
    plugins: [],
  }