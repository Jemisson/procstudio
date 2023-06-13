import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  bottom: 0;
  width: 100%;
  height: 198px;
  padding: 28px 0;
  margin-top: 64px;
  background-color: ${colors.white};

  .links {
    text-decoration: none;
    color: ${colors.black};
  }
`;
