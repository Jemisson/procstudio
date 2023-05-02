import styled from 'styled-components';
import { colors, border } from '@/styles/globals';

export const Container = styled.div``;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;

  color: ${colors.primary};
`;

export const ContentContainer = styled.div`
  padding: 20px;
  min-width: 400px;
  max-width: 1038px;

  border-radius: 4px;
  margin-bottom: 20px;
  background-color: ${colors.white};
`;
