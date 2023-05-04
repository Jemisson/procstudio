import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.background};

  .grid {
    display: grid;
    grid-template-columns: 224px 1fr;
    grid-template-rows: auto 1fr;
  }

  .main {
    padding: 20px;
    overflow: auto;
    min-width: 600px;
    grid-column: 2 / -1;
  }
`;
