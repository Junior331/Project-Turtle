import React from 'react';
import images from '../../assets/img';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import * as S from './HomeStyled';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <S.HomeContainer>
      <S.HomeHeader />
      <S.Content>
        <S.Logo src={images.logo} />
        <S.Title>DESCUBRA O MUNDO MARINHO!</S.Title>
        <S.Paragraph>
          Identifique novos animais e conheça mais sobre a vida deles
        </S.Paragraph>
        <Button onClick={() => navigate('/turtles')}>
          <S.ButtonTitle>Iniciar experiência</S.ButtonTitle>
        </Button>
      </S.Content>
    </S.HomeContainer>
  );
};
