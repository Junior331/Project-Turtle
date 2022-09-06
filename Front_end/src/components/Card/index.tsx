import React from 'react';

import { CardProps } from './@types';

import * as S from './styles';

export const Card = ({
  children,
  width,
  blur,
  height,
  borderRadius,
  backgroundColor
}: CardProps) => {
  return (
    <S.CardComponent
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      blur={blur}
    >
      {children}
    </S.CardComponent>
  );
};
