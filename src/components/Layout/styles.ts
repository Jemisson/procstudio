import styled from 'styled-components';

export const Container = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 224px 1fr;
    grid-template-rows: auto 1fr;
  }

  .main {
    grid-column: 2 / -1;
    padding: 20px;
  }
`;
