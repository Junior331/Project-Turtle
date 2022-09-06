import styled from 'styled-components';

import { CardTurtleContainerTypes } from './@types';

export const CardTurtleContainer = styled.div<CardTurtleContainerTypes>`
  width: 184px;
  height: 208px;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  justify-content: center;
  border-radius: 35px 35px;
  background-repeat: no-repeat;
  background-position: center top;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
`;

export const CardTurtleBase = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
`;

export const CardTurtleTitle = styled.p`
  padding-left: 11px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  color: #ffffff;
`;

export const CardButons = styled.div`
  width: 100%;
  height: 208px;
  border-radius: 0 0 35px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const CardTurtleAdopt = styled.img`
  width: 100%;
  max-width: 112px;
  height: 100%;
  max-height: 41px;
`;

export const CardTurtlePin = styled.img`
  width: 100%;
  max-width: 42px;
  height: 100%;
  max-height: 41px;
`;
