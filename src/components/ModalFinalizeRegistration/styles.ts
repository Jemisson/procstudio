import Box from '@mui/material/Box';
import styled from 'styled-components';
import { colors } from '@/styles/globals';

interface IDSwitchProps {
  showInput: boolean;
}

export const Content = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  background-color: ${colors.white};
  padding: 16px;
  border-radius: 4px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.primary};
`;

export const InputContainer = styled.div<IDSwitchProps>`
  opacity: ${({ showInput }) => (showInput ? 1 : 0)};
  max-height: ${({ showInput }) => (showInput ? '100px' : 0)};
  overflow: hidden;
  transition: opacity 0.3s, max-height 0.3s;
`;

export const Input = styled.div`
  width: 292px;

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiInputBase-root {
    padding: 0 0 0 4px;
    height: 40px !important;
  }

  input {
    padding: 0;
    width: 100%;
    height: 40px;
    padding: 0 5px;
  }
`;
