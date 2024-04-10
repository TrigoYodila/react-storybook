/** @type { import('@storybook/react').Preview } */
// import 'tailwindcss/tailwind.css';  // import files tailwinds css
import '../src/index.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
