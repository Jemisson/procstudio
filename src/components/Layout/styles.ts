import styled, { css, keyframes } from 'styled-components';
import { Box } from '@mui/material';

import { colors, border } from '@/styles/globals';
import { IMenuUserProps } from '@/interfaces/ILayout';

export const ContentContainer = styled.span``;

export const Container = styled.span`
  min-height: 100vh;

  .MuiDrawer-paperAnchorDockedLeft {
    background-color: ${colors.primary};
  }

  .imgContainer {
    padding: 34px;
    border-bottom: 1px solid ${colors.border};
  }

  .subItem {
    justify-content: center;
    margin-top: 0 !important;
  }

  a {
    display: flex;
    position: relative;

    width: 100%;
    height: 56px;
    text-decoration: none;
    color: ${colors.white};

    padding: 6px 0;
    margin-top: 16px !important;

    .arrowWork {
      transition: transform 0.3s ease;
    }

    :hover {
      .arrow {
        color: ${colors.quartiary};
      }

      .arrowWork {
        transform: rotate(0deg) !important;
      }
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

  .MuiPaper-root {
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: #2a3f54;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #eeeeee;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #b4b4b4;
    }

    scrollbar-color: #2a3f54;
    scrollbar-width: thin;
  }
`;

export const Flex = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const SelectContainer = styled.div<IMenuUserProps>`
  display: flex;
  justify-content: center;
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
    margin-top: 145px;
    position: absolute;

    flex-direction: column;
    align-items: baseline;

    z-index: 1;
    box-shadow: ${border.shadow};
    background-color: ${colors.primary};

    a {
      width: 100%;
      padding: 8px;

      text-decoration: none;
      color: ${colors.white};

      :hover {
        color: ${colors.primary};
        background-color: ${colors.white};
      }
    }
  }
`;

export const CloseDropdown = styled.div`
  display: none;
  cursor: default;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: transparent;
`;
