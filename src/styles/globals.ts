import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#2A3F54',
  tertiary: '#1D79FB',
  border: '#9B9B9B',
  icons: '#41414D',
  text: '#A8A8B3',
  background: '#EEEEEE',
  black: '#121214',
  white: '#FFFFFF',
  error: '#CD0D15',
};

export const border = {
  primary: `1px solid ${colors.primary}`,
  shadow: `0px 5px 5px -3px rgba(0, 0, 0, 0.2),
  0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)`,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-size: 20px;
    height: 100%;
    font-family: "Roboto" , sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: ${colors.black};
  }

  button {
    cursor: pointer;
  }
`;
