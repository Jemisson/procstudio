import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.div`
  .ml-8 {
    margin-right: 8px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;

  color: ${colors.primary};
`;

export const ContentContainer = styled.div`
  padding: 20px;
  max-width: 1038px;

  border-radius: 4px;
  margin-bottom: 20px;
  background-color: ${colors.white};
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 350px;
  padding: 8px;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${colors.icons};
  background-color: ${colors.white};
  border: 1px solid ${colors.border};

  svg {
    color: ${colors.icons};
    margin-right: 4px;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1rem;
    color: ${colors.text};
    background-color: ${colors.white};

    :focus-visible {
      outline: none;
      border: none;
    }

    ::placeholder {
      color: ${colors.placeholder};
    }
  }
`;
