import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.div`
  width: 224px;
  height: 100%;
  position: fixed;
  background-color: ${colors.primary};

  .imgContainer {
    border-bottom: 1px solid ${colors.border};
  }

  a {
    width: 100%;
    height: 56px;
    font-size: 20px;
    font-weight: 500;

    padding: 6px 0;
    margin-top: 26px;

    :hover {
      text-decoration: none;
    }
  }
`;
