import styled, { css } from "styled-components";
import color from "../../../constants/theme";

export const VisorComponent = styled.div`
  height: 95px;
  width: 100%;
  padding: 0 12px;
  background-color: ${color.black};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  gap: 12px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Text = styled.p<{
  currentValue?: boolean;
}>`
  margin: 0;
  padding: 0;
  color: ${color.white};
  font-size: 44px;
  font-weight: 300;
  text-transform: lowercase;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ currentValue }) =>
    currentValue &&
    css`
      font-weight: 500;
      font-size: 54px;
    `}
`;
