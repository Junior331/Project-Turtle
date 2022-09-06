import React from 'react';

import nextImage from '../../assets/img/nextImage.svg';
import nextImageYellow from '../../assets/img/nextImageYellow.svg';

import { ButtonProps } from './@types';

import * as S from './ButtonStyled';

export const Button = ({
  children,
  width,
  height,
  borderRadius,
  backgroundColor,
  hiddenArrow,
  typeButton = 'default',
  buttonNextBackground,
  color,
  onClick = () => {}
}: ButtonProps) => {
  const buttonImage = typeButton === 'input' ? nextImageYellow : nextImage;

  return (
    <S.ButtonComponent
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      typeButton={typeButton}
      color={color}
      onClick={() => {
        if (typeButton === 'default') {
          onClick();
        }
      }}
    >
      {children}
      {hiddenArrow ? null : (
        <S.ButtonNext
          typeButton={typeButton}
          buttonNextBackground={buttonNextBackground}
          onClick={() => {
            if (typeButton === 'input') {
              onClick();
            }
          }}
        >
          {typeButton === 'input' && <S.ButtonInput placeholder="Teste..." />}
          <S.ButtonImage src={buttonImage} alt="próximo" />
        </S.ButtonNext>
      )}
    </S.ButtonComponent>
  );
};
