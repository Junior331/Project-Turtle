import styled from 'styled-components';

import { CardComponentProps } from './@types';

export const CardComponent = styled.div<CardComponentProps>`
  width: ${({ width }) => width || '184px'};
  height: ${({ height }) => height || '208px'};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.palette.background.yellow};
  backdrop-filter: ${(props) => (props.blur ? 'blur(17px)' : 'none')};
  border-radius: ${({ borderRadius }) => borderRadius || '35px'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
