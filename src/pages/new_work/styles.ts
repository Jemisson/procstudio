import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.div`
  margin-top: 84px;
  padding: 0 40px;

  .ml-8 {
    margin-right: 8px;
  }
`;

export const ContentContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  max-width: 1600px;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: ${colors.white};
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: ${colors.primary};
`;
