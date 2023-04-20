import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  border: '#9B9B9B',
  backgroundInput: '#EEEEEE',
  black: '#000000',
  white: '#FFFFFF',
  red: '#CD0D15',
};

export const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  font-family: "Roboto" , sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: ${colors.white};
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.backgroundInput};
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
