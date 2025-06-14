module.exports = {
  content: [
    './src/**/*.{html,ts}',


  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue
        secondary: '#FBBF24', // Yellow
        accent: '#EF4444', // Red
        background: '#F3F4F6', // Light Gray
        text: '#111827', // Dark Gray
        border: '#D1D5DB', // Gray
        success: '#10B981', // Green
        warning: '#F59E0B', // Orange
        error: '#DC2626', // Dark Red
        info: '#3B82F6', // Light Blue
        muted: '#9CA3AF', // Gray
        light: '#F9FAFB', // Off-White
        dark: '#111827', // Almost Black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
    },
  plugins: [],
}
}