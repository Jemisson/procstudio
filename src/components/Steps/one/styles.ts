import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.div`
  width: 100%;
  margin-top: 16px;

  .comment-input {
    width: 100%;
    height: 100% !important;
    resize: vertical;
    border: none;
    padding: 8px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    outline: none;

    :focus {
      border: none;
    }
  }

  span {
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

export const SubjectOptionsArea = styled.div`
  border: 1px solid ${colors.icons};
  border-radius: 4px;
  margin-left: 29px;

  width: 100%;
  padding: 10px;
`;

export const Input = styled.input`
  width: 314px;
  height: 40px;
  border-radius: 4px;

  border: 1px solid ${colors.icons};

  font-size: 16px;
  font-weight: 300;
  margin-top: 8px;
  color: ${colors.black};
`;

export const DropContainer = styled.div`
  flex: 1;
  height: 94px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;
`;

export const FileList = styled.div`
  flex: 1;
  height: 94px;
  width: 100%;
  margin-left: 10px;
  padding: 8px;

  display: flex;
  flex-direction: column;

  border-radius: 4px;
  border: 1px solid #ddd;

  transition: height 0.2s ease;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.tertiary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #b4b4b4;
  }

  scrollbar-color: #eeeeee #2a3f54;
  scrollbar-width: thin;

  .name {
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .fileName {
    font-size: 14px;
    font-weight: 300;
    color: ${colors.black};

    display: flex;
    align-items: center;
  }

  p {
    font-size: 14px;
    margin: auto;
  }
`;
