import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;

  .inputContainer {
    width: 398px;
    margin-top: 16px;
    flex-direction: column;
  }

  span {
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
