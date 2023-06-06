import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.div`
  margin-top: 84px;
  padding: 0 40px;

  .ml-8 {
    margin-right: 8px;
  }

  .MuiStepper-horizontal {
    justify-content: space-between;
  }

  .MuiStepConnector-horizontal {
    display: none !important;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: ${colors.primary};
`;

export const ContentContainer = styled.div`
  min-height: 100vh;
  padding: 20px 0;
  max-width: 1600px;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: ${colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 778px;
  padding: 0 16px;

  .buttonContainer {
    display: flex;
    justify-content: end;
    margin-top: 16px;
  }
`;
