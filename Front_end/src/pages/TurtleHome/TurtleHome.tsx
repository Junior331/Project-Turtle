import React from 'react';
import images from '../../assets/img';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import * as S from './TurtleHomeStyled';

const TurtleHome = () => {
  const navigate = useNavigate();

  const { state }: any = useLocation();

  return (
    <S.TurtleInitialPageContainer image={state.item.image}>
      <S.Header>
        <Button
          onClick={() => navigate('/turtles')}
          hiddenArrow
          backgroundColor="#FFF"
          width="77px"
          height="108px"
        >
          <S.ImgArrow src={images.arrowBack} />
        </Button>
        <S.Identification>
          <S.Kind>{state.item.type}</S.Kind>
          <S.Name>{state.item.name}</S.Name>
        </S.Identification>
      </S.Header>
      <S.Content>
        <S.PriceContainer>
          <Card width="194px" borderRadius="42px" height="220px">
            <S.PriceContent>
              <S.NFTImage src={images.NFTImage} />
              <S.Price>{state.item.adoptTurtle}</S.Price>
              <S.Adopt>Adotar Tartaruga</S.Adopt>
            </S.PriceContent>
          </Card>
        </S.PriceContainer>
        <S.InfoContainer>
          <S.MarginLeft>
            <Card
              backgroundColor="rgba(255, 255, 255, 0.3)"
              blur
              borderRadius="29px"
              width="100%"
              height="100px"
            >
              <S.BeachNumberContainer>
                <S.BeachNumber>+{state.item.visitedBeaches}</S.BeachNumber>
                <S.BeachText>Praias visitadas</S.BeachText>
              </S.BeachNumberContainer>
            </Card>
          </S.MarginLeft>
          <Card
            backgroundColor="#FFF"
            blur
            borderRadius="29px"
            width="100%"
            height="150px"
          >
            <S.YearContainer>
              <S.YearNumber>
                <span style={{ fontSize: '40px' }}>{state.item.age}</span> anos
              </S.YearNumber>
              <S.YearText>Idade Aproximada</S.YearText>
            </S.YearContainer>
          </Card>
        </S.InfoContainer>
      </S.Content>
      <S.ButtonContainer>
        <Button
          onClick={() => navigate('/newturtle')}
          color="white"
          buttonNextBackground="white"
        >
          <S.ButtonTitle>Conhecer tartaruga</S.ButtonTitle>
        </Button>
      </S.ButtonContainer>
    </S.TurtleInitialPageContainer>
  );
};

export default TurtleHome;
