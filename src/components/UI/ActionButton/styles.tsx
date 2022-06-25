import styled, { css } from 'styled-components';
import color from '../../../constants/theme'

const Button = styled.button<{ buttonType: 'number' | 'operation' }>`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 90px;
  font-size: 54px;
  ${({ buttonType }) =>
    buttonType === 'operation' &&
    css`
      color: ${color.white};
      background-color: ${color.primary};
      min-width: 100px;
      &:hover {
        background-color: ${color.primary_light};
      }
    `}
  ${({ buttonType }) =>
    buttonType === 'number' &&
    css`
      min-width: 90px;
      width: 100%;
      color: ${color.grey};
      background-color: ${color.grey_light};
      &:hover {
        background-color: ${color.grey_lighter};
      }
    `}
`;

export default Button;
