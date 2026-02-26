/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // ================== BRAND COLOR SYSTEM ==================
        // Primary Colors (Navy - Professional/Trust)
        'brand-primary': '#0F172A',        // Deep Navy
        'brand-primary-light': '#1E293B',  // Light Navy
        'brand-primary-dark': '#0A0F1B',   // Darker Navy
        
        // Secondary Colors (Royal Blue - Action/Accent)
        'brand-secondary': '#1D4ED8',      // Royal Blue
        'brand-secondary-light': '#2563EB', // Light Blue
        'brand-secondary-dark': '#1E40AF', // Dark Blue
        
        // Success Colors (Emerald - Positive/Validation)
        'brand-success': '#059669',        // Emerald
        'brand-success-light': '#10B981',  // Light Emerald
        'brand-success-dark': '#047857',   // Dark Emerald
        
        // Neutral Colors
        'brand-bg': '#F8FAFC',             // Soft White Background
        'brand-surface': '#FFFFFF',        // White Cards
        'brand-border': '#E2E8F0',         // Light Gray Border
        'brand-text-primary': '#0F172A',   // Navy Text
        'brand-text-secondary': '#64748B', // Slate Text
        'brand-text-muted': '#94A3B8',     // Muted Text
        
        // Status Colors
        'brand-warning': '#F59E0B',        // Amber
        'brand-danger': '#EF4444',         // Red
        'brand-info': '#0EA5E9',           // Sky Blue
        
        // Legacy colors for backward compatibility
        navy: '#0F172A',
        'navy-light': '#1E293B',
        'royal-blue': '#1D4ED8',
        'royal-blue-light': '#2563EB',
        emerald: '#059669',
        'emerald-light': '#10B981',
        'bg-light': '#F8FAFC',
        'text-primary': '#0F172A',
        'text-secondary': '#64748B',
        primary: '#0F172A',
        secondary: '#059669',
        'slate-50': '#F8FAFC',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

