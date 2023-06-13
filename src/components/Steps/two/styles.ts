import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.div`
  min-height: 348px;
  .MuiInputBase-root {
    height: 40px;
  }
`;



export const Input = styled.input`
  width: 314px;
  height: 40px;
  padding-left: 8px;
  border-radius: 4px;

  border: 1px solid ${colors.icons};

  font-size: 16px;
  font-weight: 300;
  margin-top: 8px;
  color: ${colors.black};
`;

export const OptionsArea = styled.div`
  border: 1px solid ${colors.icons};
  border-radius: 4px;
  margin-left: 29px;

  width: 100%;
  min-height: 348px;
  padding: 10px;
`;
