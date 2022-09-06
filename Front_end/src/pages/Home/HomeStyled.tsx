import styled from 'styled-components';
import images from '../../assets/img';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${props => props.theme.palette.background.light};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: ${props => props.theme.typography.fontSizeMedium}rem;
  position: relative;
`;
export const HomeHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${images.homeBackground});
`;
export const Content = styled.div`
  gap: 20px;
  display: flex;
  height: 370px;
  position: relative;
  align-items: center;
  padding-inline: 25px;
  top: calc(3vh - 100px);
  flex-direction: column;
`;
export const Logo = styled.img`
  margin-inline: auto;
`;
export const Title = styled.h1`
  max-width: 305px;
  line-height: 100%;
  text-align: center;
  font-family: 'Poppins';
  font-size: ${props => props.theme.typography.fontSizeLarge}rem;
  font-weight: ${props => props.theme.typography.fontWeightMedium};
  color: ${props => props.theme.palette.title.regular};
`;
export const Paragraph = styled.p`
  font-weight: 400;
  max-width: 330px;
  text-align: center;
  color: #00000059;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.theme.typography.fontSizeRegular}rem;
  color: #00000059;
  font-weight: 400;
  text-align: center;
`;
export const ButtonTitle = styled.p`
  margin: auto;
  line-height: 30px;
  font-weight: ${(props: { theme: { typography: { fontWeightBold: any } } }) =>
    props.theme.typography.fontWeightBold + 100};
  font-size: ${(props: { theme: { typography: { fontSizeRegular: any } } }) =>
    props.theme.typography.fontSizeRegular + 0.7}rem;
`;
