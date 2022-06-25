import styled, { css } from "styled-components";

const Container = styled.div<{
  general?: boolean;
  buttons?: boolean;
}>`
  width: 100%;
  display: flex;
  gap: 1px;
  box-sizing: border-box;
  ${({ buttons }) =>
    buttons &&
    css`
      flex-direction: column-reverse;
    `}
  ${({ general }) =>
    general &&
    css`
      width: 380px;
      box-sizing: border-box;
      flex-direction: column;
      padding: 2px;
      border: 1px solid grey;
    `}
`;

export default Container;
