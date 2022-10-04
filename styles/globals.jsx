import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
  --chem-color-main: #284275;
  --chem-color-white: #ffffff;
  --chem-color-light-gray: #dfdede;
  --chem-color-light-blue: #EBF3F7;
  --chem-color-blue-gray: #57646d;
  --chem-color-blue: #004cff;
  --chem-color-dark: #000305;
  --chem-color-transparent: transparent;

  --chem-gradient-hero: linear-gradient(rgba(255, 254, 254, 0.3), rgba(255, 255, 255, 0.8));
 
  --chem-index-navbar: 999;
}

::selection {
  background-color: var(--chem-color-main);
  color: var(--chem-color-white);
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}

/*
  3. Allow percentage-based heights in the application
*/

html,
body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
}
/*
  6. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}

`;
