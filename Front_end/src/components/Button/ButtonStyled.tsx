import styled, { css } from 'styled-components';

import Theme from '../../styles/Theme';

import { ButtonComponentProps, ButtonNextProps } from './@types';

const variables = {
  default: {
    backgroundColor: Theme.palette.button.default,
    color: Theme.palette.background.light,
    nextBackground: Theme.palette.background.light,
    nextWidth: '81px'
  },
  input: {
    backgroundColor: Theme.palette.button.default,
    color: Theme.palette.button.default,
    nextBackground: Theme.palette.background.light,
    nextWidth: '369px'
  }
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: ${({ width }) => width || '379px'};
  height: ${({ height }) => height || '84px'};
  border-radius: ${({ borderRadius }) => borderRadius || '60px'};
  background-color: ${({ typeButton = 'default', backgroundColor }) =>
    backgroundColor ? backgroundColor : variables[typeButton].backgroundColor};
  color: ${({ typeButton = 'default', color }) =>
    color || variables[typeButton].color};
  gap: 10px;
  border: none;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ typeButton }) =>
    typeButton === 'default' ? 'pointer' : 'none'};
`;

export const ButtonNext = styled.div<ButtonNextProps>`
  background-color: ${({ typeButton = 'default', buttonNextBackground }) =>
    buttonNextBackground || variables[typeButton].nextBackground};
  width: ${({ typeButton = 'default' }) => variables[typeButton].nextWidth};
  height: 74px;
  border-radius: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ typeButton }) =>
    typeButton === 'input' &&
    css`
      gap: 20px;
      justify-content: right;
      img {
        padding-right: 35px;
      }
    `}
`;

export const ButtonImage = styled.img``;

export const ButtonInput = styled.input`
  background-color: transparent;
  width: 65%;
  border: none;
  font-size: 2.9rem;
  textarea:focus,
  &:focus {
    outline: none;
  }
`;
