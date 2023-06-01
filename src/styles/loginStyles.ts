import styled, { css } from 'styled-components';
import { colors } from '@/styles/globals';

interface IButtonProps {
  isLoading: boolean;
}

interface IFormProps {
  isErrored: boolean;
}

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  padding: 3rem 1rem;

  .imageContainer {
    width: 200px;
    img {
      width: 100%;
    }
  }

  @media (min-width: 640px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 2rem;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 640px;

  background-color: ${colors.white};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Input = styled.input<IFormProps>`
  width: 100%;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  border: 1px solid ${colors.border};

  color: ${colors.text};
  outline: none;
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  line-height: 1.5;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 135, 95, 0.3);
    z-index: 20;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
      box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.3);

      &:focus {
        border-color: ${colors.error};
        box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.3);
    `}

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.6rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 640px;
  width: 100%;
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 2rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 4rem;
  }
`;

export const Button = styled.button<IButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 42px;
  margin-top: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;

  color: ${colors.white};
  background-color: ${colors.green};

  border-radius: 4px;
  border-color: transparent;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #00875f;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  ${props =>
    props.isLoading &&
    css`
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: -10px;
        left: -10px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        border-radius: 4px;
        border: 2px solid transparent;
        animation: pulse 1.5s ease-in-out infinite;
      }
    `}

  ${props =>
    props.isLoading &&
    css`
      &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-width: 4px;
        animation: pulse 1.5s ease-in-out infinite;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(41, 167, 68, 0.7);
        }
        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
        }
        100% {
          transform: scale(1.3);
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
      }
    `}
`;
