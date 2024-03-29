import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --ah-color-100: #fffffe;
  --ah-color-200: #6FC3DF;
  --ah-color-250: #2f8ca3;
  --ah-color-300: #f2cb05;
  --ah-color-400: #f2a007;
  --ah-color-500: #193f4a;
  --ah-color-600: #011F26;
  --ah-color-700: #030504;
  --ah-color-light: var(--ah-color-100);
  --ah-color-dark: var(--ah-color-600);
  --ah-color-boxshadow-primary: rgb(1, 31, 38, 0.188);
  --ah-color-boxshadow-secondary: rgb(47, 140, 163, 0.188);

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: var(--ah-color-light);
  background-color: var(--ah-color-dark);
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0 auto;
  padding: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  min-height: 100svh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  color: var(--ah-color-200);
  filter: drop-shadow(2px 4px 6px var(--ah-color-700));
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: none;
}
a:hover {
  color: #535bf2;
}

input:invalid {
  border: solid #fffffe 3px;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--ah-color-500);
  color: var(--ah-color-light);
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: var(--ah-color-400);
  color: var(--ah-color-300);
  background-color: var(--ah-color-700);
}

button:disabled {
  background-color: var(--ah-color-250);
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
`;
