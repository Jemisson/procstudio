import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2A3F54',
    },
    error: {
      main: '#CD0D15',
    },
  },
});

export const colors = {
  primary: '#2A3F54',
  primaryOpacity: 'rgba(42, 63, 84, 0.3)',
  secondary: '#1D79FB',
  tertiary: '#7F7F7F',
  green: '#29A744',
  border: '#9B9B9B',
  icons: '#41414D',
  text: '#A8A8B3',
  placeholder: '#E0E0E0',
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

export const DescriptionText = styled.text`
  font-size: 16px;
  font-weight: 300;

  text-transform: none;
  color: ${colors.white};
`;
