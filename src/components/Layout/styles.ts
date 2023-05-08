import { Box } from '@chakra-ui/react';
import styled, { css, keyframes } from 'styled-components';

import { colors, border } from '@/styles/globals';
import { IMenuUserProps } from '@/interfaces/ILayout';

export const Container = styled.span`
  min-height: 100vh;

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

export const CloseDropdown = styled.div`
  display: none;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: transparent;
`;

const menuAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SelectContainer = styled.div<IMenuUserProps>`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 16px;
  cursor: pointer;

  ${props =>
    props.isOpen &&
    css`
      svg {
        rotate: 180deg;
      }

      .close {
        display: block;
      }
    `}

  .selectItemsContainer {
    width: 145px;
    margin-top: 130px;
    position: absolute;

    z-index: 1;
    border-radius: 4px;
    box-shadow: ${border.shadow};
    background-color: ${colors.primary};
    animation: ${menuAnimation} 0.3s ease-in-out forwards;

    .selectItem {
      padding: 2px 8px;
      cursor: pointer;
      color: ${colors.white};

      :hover {
        transform: scaleY(1.02);
      }
    }
  }
`;
