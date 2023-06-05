import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.div`
  margin-top: 16px;

  .MuiInputBase-root {
    padding: 0 65px 0 0;
  }

  .MuiChip-label {
    font-size: 12px !important;
  }

  .MuiButtonBase-root {
    height: 24px !important;
  }

  .mui-style-1dqzt8q-MuiAutocomplete-root
    .MuiOutlinedInput-root
    .MuiAutocomplete-input {
    padding: 6.5px !important;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  width: 398px;

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiInputBase-root {
    padding: 0;
  }

  input {
    padding: 0;
    width: 100%;
    height: 40px;
    padding: 0 5px;
  }
`;
