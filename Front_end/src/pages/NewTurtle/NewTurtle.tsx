import React from 'react';
import images from '../../assets/img';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import * as S from './NewTurtleStyled';

const NewTurtle = () => {
  const navigate = useNavigate();

  return (
    <S.NewTurtleContainer>
      <Button
        hiddenArrow
        width="77px"
        height="108px"
        backgroundColor="#FFF"
        onClick={() => navigate(-1)}
      >
        <S.Arrow src={images.arrowBack} />
      </Button>
      <S.Img
        margin="120px 0 -40px"
        src={images.outlineTurtle}
        alt="Desenho tartaruga de contorno"
      />
      <S.Content>
        <S.Title>EBA! Você identificou uma nova tartaruga no pedaço</S.Title>
        <S.Paragraph>
          Aguarde em quanto desenhamos uma NFT para a identidade dela!
        </S.Paragraph>
        <S.Span>Escolha um nome para ela:</S.Span>

        <Button hiddenArrow onClick={() => navigate(-1)}>
          <S.ContainerArrows>
            <S.Arrow src={images.ArrowRight} alt="" />
            <S.Arrow src={images.ArrowRight} alt="" />
            <S.Arrow src={images.ArrowRight} alt="" />
          </S.ContainerArrows>
        </Button>
      </S.Content>
    </S.NewTurtleContainer>
  );
};

export default NewTurtle;
