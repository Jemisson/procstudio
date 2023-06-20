import Box from '@mui/material/Box';
import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Content = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 981px;
  background-color: ${colors.white};
  padding: 16px;
  border-radius: 4px;

  .inputContainer {
    margin-top: 16px;
    flex-direction: column;

    .MuiInputBase-root {
      padding: 2px 65px 0 2px;
    }

    .MuiChip-label {
      font-size: 12px !important;
    }

    .mui-style-1dqzt8q-MuiAutocomplete-root
      .MuiOutlinedInput-root
      .MuiAutocomplete-input {
      padding: 6.5px !important;
    }
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.primary};
`;

export const Input = styled.div`
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

export const DeadlineContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  input {
    width: 180px;
    height: 10px;
  }
`;
