import styled, { css } from 'styled-components';

import { ContentInformationStyleTypes } from './@types';

import backgroundTurtles from '../../assets/img/backgroundTurtles.svg';

export const TurtlesContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  input {
    display: none;
  }
`;

export const TurtlesHyper = styled.div`
  width: 100vw;
  height: 338px;
  display: flex;
  padding-right: 25px;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background: url(${backgroundTurtles});
`;

export const TurtlesHyperTitle = styled.p`
  width: 216px;
  height: 50px;
  text-align: end;
  color: #ffffff;
  font-weight: 400;
  line-height: 49px;
  font-size: 41.2543px;
`;

export const TurtlesHyperSubTitle = styled.p`
  width: 164px;
  height: 31px;
  text-align: end;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
  padding-bottom: 15px;
`;

export const TurtleHyperContentDown = styled.div`
  gap: 0 8px;
  display: flex;
  padding-top: 8px;
`;

export const TurtlesList = styled.div`
  width: 100%;
  display: flex;
`;

export const TurtlesContent = styled.div`
  width: 100%;
  gap: 20px 0;
  display: flex;
  margin: 10px 0;
  flex-wrap: wrap;
  justify-content: space-evenly;

  > div:nth-child(odd) {
    margin-top: -75px;
  }

  > div:nth-child(1) {
    margin: 0;
  }
  > div:nth-child(2) {
    margin-top: 75px;
  }
`;

export const ContentInformation = styled.div<ContentInformationStyleTypes>`
  width: 97px;
  height: 86px;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: inset 0px -4.43439px 17.7376px rgba(255, 255, 255, 0.15);

  ${({ typeContent }) =>
    typeContent === 'kilometers' &&
    css`
      display: flex;
      font-size: 16px;
      color: #ffffff;
      font-weight: 400;
      align-items: center;
      background: #ffb620;
      justify-content: center;
      backdrop-filter: blur(14.7813px);
    `}
`;

export const InfoContainer = styled.div`
  gap: 10px;
  width: auto;
  height: auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'card_1 card_1'
    'card_3 card_2';
  div:nth-child(1) {
    grid-area: card_1;
    justify-self: right;
  }
  div:nth-child(2) {
    grid-area: card_2;
  }
  div:nth-child(3) {
    grid-area: card_3;
  }
`;
export const BeachNumberContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BeachNumber = styled.p`
  line-height: 100%;
  text-align: center;
  letter-spacing: -1px;
  font-family: 'Poppins';
  color: ${props => props.theme.palette.text.light};
  font-weight: ${props => props.theme.typography.fontWeightBold};
  font-size: ${props => props.theme.typography.fontSizeRegular + 0.8}rem;
`;
export const BeachText = styled.p`
  text-align: center;
  line-height: 100%;
  margin-bottom: 3px;
  color: ${props => props.theme.palette.text.light};
  font-weight: ${props => props.theme.typography.fontWeightThin};
  font-size: ${props => props.theme.typography.fontSize - 0.5}rem;
`;
export const YearContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const YearNumber = styled.p`
  line-height: 120%;
  text-align: center;
  letter-spacing: -2px;
  font-family: 'Poppins';
  color: ${props => props.theme.palette.title.regular};
  font-size: ${props => props.theme.typography.fontSizeRegular}rem;
  font-weight: ${props => props.theme.typography.fontWeightRegular};
`;
export const Text = styled.p`
  width: 55px;
  text-align: start;
  line-height: 120%;
  font-family: 'Poppins';
  color: ${props => props.theme.palette.text.light};
  font-size: ${props => props.theme.typography.fontSize - 0.5}rem;
  font-weight: ${props => props.theme.typography.fontWeightRegular};
`;
export const Span = styled.span<{ large?: boolean }>`
  font-size: ${props => props.theme.typography.fontSizeMedium}rem;
  ${props =>
    props.large &&
    css`
      margin-right: 2px;
      line-height: 26px;
      color: ${props => props.theme.palette.text.light};
      font-size: ${({ theme }) => theme.typography.fontSizeRegular + 0.4}rem;
    `};
`;

export const YearText = styled.p`
  line-height: 100%;
  text-align: start;
  margin-left: 17px;
  color: #4d4f5180;
  font-weight: ${props => props.theme.typography.fontWeightThin};
  font-size: ${props => props.theme.typography.fontSize - 0.5}rem;
`;

export const Label = styled.label<{ noActive?: boolean }>`
  gap: 14px;
  bottom: 2vh;
  width: 254px;
  height: 84px;
  border: none;
  outline: none;
  display: flex;
  position: fixed;
  cursor: pointer;
  border-radius: 60px;
  align-items: center;
  font-family: 'Poppins';
  justify-content: center;
  transition: 0.2s color ease;
  background-color: #ffb620;
  color: ${props => props.theme.palette.text.light};
  font-weight: ${({ theme }) => theme.typography.fontWeightBolder};
  font-size: ${({ theme }) => theme.typography.fontSizeRegular}rem;

  ${props =>
    props.noActive === false &&
    css`
      cursor: no-drop;
      background: #c4c4c4;
    `};
`;
export const Icon = styled.img<{ filter?: boolean }>`
  width: 38px;
  ${props =>
    props.filter &&
    css`
      width: auto;
    `};
`;
export const TextFilter = styled.h2`
  margin: 0 auto;
  font-family: 'Poppins';
  color: ${props => props.theme.palette.text.light};
  font-weight: ${({ theme }) => theme.typography.fontWeightBolder};
  font-size: ${({ theme }) => theme.typography.fontSizeRegular}rem;
`;
export const Filter = styled.div`
  z-index: 2;
  left: 100px;
  padding: 5px;
  width: 185px;
  height: 67px;
  display: flex;
  margin-top: 10px;
  position: relative;
  border-radius: 60px;
  align-items: center;
  margin-bottom: -79px;
  background-color: #303841;
  justify-content: space-between;
`;
