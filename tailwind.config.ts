import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray900: '#121214',
        gray800: '#202024',
        gray300: '#c4c4cc',
        gray100: '#e1e1e6',
        green500: '#00875f',
        green300: '#00b37e',
        gradientGreen: '#1EA483',
        gradientPurple: '#7465D4',
        footerBackground: 'rgba(0, 0, 0, 0.6)',
      },
      maxWidth: {
        container: '1180px',
        homeContainer: 'calc(100vw - ((100vw - 1180px) / 2))',
      },
    },
  },
  plugins: [],
}
export default config
