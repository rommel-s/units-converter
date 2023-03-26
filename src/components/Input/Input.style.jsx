import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 5em;
  margin: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
  top: 50%;
  left: -20%;
  color: #999;
  opacity: 0.75;
  order: 1;
  padding-left: 5px;
  pointer-events: none;
  transform-origin: left top;
  transition: 200ms ease all;

  @media (min-width: 700px) {
    left: -9%;
    width: 50%;
  }
`;

export const MainInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
  text-shadow: none;
  height: 2em;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: #000;
  order: 2;

  &:focus {
    outline: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.shades.darken01};
  }

  &:not(:focus) {
    color: transparent;
  }

  &:focus + ${Label} {
    color: ${({ theme }) => theme.colors.main.primary};
    opacity: 1;
    transform: scale(0.7) translateY(-150%);
    margin-bottom: 2px;
  }

  @media (min-width: 700px) {
    width: 70%;
  }
`;
