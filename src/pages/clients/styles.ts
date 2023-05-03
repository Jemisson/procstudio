import styled from 'styled-components';
import { colors, border } from '@/styles/globals';

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

export const Input = styled.input`
  width: 350px;
  height: 40px;
  font-size: 1rem;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
  background: transparent;
  color: ${colors.text};

  z-index: 99;
  position: relative;

  ::placeholder {
    opacity: 0.5;
  }
`;

export const ContentContainer = styled.div`
  padding: 20px;
  min-width: 400px;
  max-width: 1038px;

  border-radius: 4px;
  margin-bottom: 20px;
  background-color: ${colors.white};
`;
