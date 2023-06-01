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

  .MuiDataGrid-virtualScrollerRenderZone,
  .MuiDataGrid-row,
  .odd-row {
    width: 100%;
  }

  .MuiDataGrid-cell:focus {
    outline: none;
  }

  .MuiDataGrid-columnHeader:focus {
    outline: none;
  }

  .even-row:nth-child(odd) {
    background-color: ${colors.placeholder};
  }

  .odd-row:nth-child(even) {
    background-color: ${colors.background};
  }

  .MuiDataGrid-row:hover {
    background-color: ${colors.primaryOpacity};
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 36px;
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
