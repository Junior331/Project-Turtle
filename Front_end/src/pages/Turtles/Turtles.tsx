import React from 'react';
import * as S from './TurtlesStyled';
import images from '../../assets/img';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { ContentInformationTypes, turtle } from './@types';
import { turtles } from '../../service/mocks/Turtles';
import { CardTurtle } from '../../components/elements';

const saveImageAndRegisterWiner = (fileList: FileList | null) => {
  console.log('fileList ::', fileList);
};

const ContentInformation = ({
  children,
  typeContent
}: ContentInformationTypes) => {
  return (
    <S.ContentInformation typeContent={typeContent}>
      {children}
    </S.ContentInformation>
  );
};

export const Turtles: React.FC = () => {
  const navigate = useNavigate();

  const showInfoTurtle = (item: turtle) => {
    navigate('/turtlehome', { replace: true, state: { item } });
  };

  return (
    <S.TurtlesContainer>
      <S.TurtlesHyper>
        <S.TurtlesHyperTitle>Hypeturtle</S.TurtlesHyperTitle>
        <S.TurtlesHyperSubTitle>Tartaruga pintada</S.TurtlesHyperSubTitle>
        <S.InfoContainer>
          <Card
            backgroundColor="rgba(255, 255, 255, 0.3)"
            blur
            borderRadius="29px"
            width="97px"
            height="86px "
          >
            <S.BeachNumberContainer>
              <S.BeachNumber>+ 12</S.BeachNumber>
              <S.BeachText>Praias visitadas</S.BeachText>
            </S.BeachNumberContainer>
          </Card>
          <Card
            backgroundColor="#FFF"
            blur
            borderRadius="29px"
            width="97px"
            height="86px "
          >
            <S.YearContainer>
              <S.YearNumber>
                <S.Span>3</S.Span> anos
              </S.YearNumber>
              <S.YearText>Idade Aproximada</S.YearText>
            </S.YearContainer>
          </Card>
          <Card
            backgroundColor="#FFB620"
            blur
            borderRadius="29px"
            width="97px"
            height="86px "
          >
            <S.YearContainer>
              <S.Text>
                Mais de <S.Span large>1500</S.Span>Km nadados
              </S.Text>
            </S.YearContainer>
          </Card>
        </S.InfoContainer>
      </S.TurtlesHyper>
      <S.Filter>
        <S.TextFilter>Filter</S.TextFilter>
        <S.Icon filter src={images.filter} alt="" />
      </S.Filter>
      <S.TurtlesList>
        <S.TurtlesContent>
          {turtles.map(turtle => (
            <CardTurtle
              onClick={() => showInfoTurtle(turtle)}
              nome={turtle.name}
              backgroundImage={turtle.image}
            />
          ))}
        </S.TurtlesContent>
      </S.TurtlesList>

      <S.Label htmlFor="cameraActive">
        <S.Icon src={images.camera} alt="" />
        Identificar
      </S.Label>
      <input
        name="file"
        onChange={e => saveImageAndRegisterWiner(e.target.files)}
        id="cameraActive"
        type="file"
        accept="image/*"
        capture
      />
    </S.TurtlesContainer>
  );
};
