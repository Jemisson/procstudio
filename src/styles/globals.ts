import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2A3F54',
    },

    secondary: {
      main: '#26B99A',
    },

    success: {
      main: '#2e7d32',
    },

    error: {
      main: '#CD0D15',
    },

    warning: {
      main: '#FFC107',
    },

    info: {
      main: '#1D79FB',
    },

    mode: 'light',
  },
});

export const colors = {
  primary: '#2A3F54',
  primaryOpacity: 'rgba(42, 63, 84, 0.3)',
  secondary: '#1D79FB',
  tertiary: '#7F7F7F',
  quartiary: '#26B99A',
  quartiaryHover: '#1D7E68',
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

export const TitlePage = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${colors.primary};
`;

export const Title = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.secondary};
`;

export const Flex = styled.div`
  display: flex;
`;

export const DescriptionText = styled.label`
  font-size: 16px;
  font-weight: 300;

  text-transform: none;
  color: ${colors.white};
`;
