import styled from 'styled-components';
import { colors } from '@/styles/globals';

export const Container = styled.span`
  .MuiDrawer-paperAnchorDockedLeft {
    background-color: ${colors.primary};
  }

  .imgContainer {
    border-bottom: 1px solid ${colors.border};
  }

  a {
    display: flex;
    position: relative;
    width: 100%;
    height: 56px;
    font-weight: 500;

    padding: 6px 0;
    margin-top: 16px !important;

    ::before {
      content: '';
      position: absolute;
      bottom: 6px;
      left: 0;
      width: 0%;
      height: 2.07px;
      background-color: ${colors.white};
      transition: width 0.3s ease-in-out;
    }

    :hover::before {
      width: 100%;
    }

    .icon {
      margin: 0 16px;
    }

    .arrow {
      margin-left: auto;
      margin-right: 16px;
    }

    :hover {
      text-decoration: none;
    }
  }
`;
