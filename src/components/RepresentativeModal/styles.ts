import Box from '@mui/material/Box';
import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Content = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 990px;
  background-color: ${colors.white};
  padding: 16px;
  border-radius: 4px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.primary};
`;
