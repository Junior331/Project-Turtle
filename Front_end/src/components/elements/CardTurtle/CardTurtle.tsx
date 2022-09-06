import React from 'react';
import pinImage from '../../../assets/img/pin.svg';
import adoptImage from '../../../assets/img/button-adopt.svg';
import { CardTurtleProps } from './@types';
import * as S from './CardTurtleStyled';

export const CardTurtle = ({
  nome,
  backgroundImage,
  onClick = () => {}
}: CardTurtleProps) => {
  return (
    <S.CardTurtleContainer
      onClick={() => onClick()}
      backgroundImage={backgroundImage}
    >
      <S.CardTurtleBase>
        <S.CardTurtleTitle>{nome}</S.CardTurtleTitle>
        <S.CardButons>
          <S.CardTurtleAdopt src={adoptImage} />
          <S.CardTurtlePin src={pinImage} />
        </S.CardButons>
      </S.CardTurtleBase>
    </S.CardTurtleContainer>
  );
};
