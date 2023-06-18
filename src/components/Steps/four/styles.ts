import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;

  display: flex;

  .inputContainer {
    width: 398px;
    margin-top: 16px;
    flex-direction: column;
  }

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
`;

export const Input = styled.div`
  .MuiFormControl-root {
    width: 100%;
  }

  .MuiInputBase-root {
    padding: 0;
    height: 40px !important;
  }

  input {
    padding: 0;
    width: 100%;
    height: 40px;
    padding: 0 5px;
  }
`;
