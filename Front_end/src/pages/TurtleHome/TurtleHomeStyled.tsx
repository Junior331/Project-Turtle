import styled from 'styled-components';

export const TurtleInitialPageContainer = styled.div<{ image: string }>`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  padding-bottom: 30px;
`;

export const Header = styled.div`
  height: 150px;
  padding-top: 36px;
  padding-inline: 36px;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
`;
export const Identification = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Kind = styled.p`
  color: ${props => props.theme.palette.text.light};
  font-size: ${props => props.theme.typography.fontSizeRegular}rem;
  font-weight: ${props => props.theme.typography.fontWeightThin};
  text-align: right;
`;
export const Name = styled.h1`
  text-align: right;
  line-height: 120%;
  font-family: 'Poppins';
  color: ${props => props.theme.palette.text.light};
  font-size: ${props => props.theme.typography.fontSizeMedium}rem;
`;

export const Content = styled.div`
  display: flex;
  height: 290px;
  gap: 10px;
  width: 100%;
  justify-content: center;
  padding-inline: 20px;
  overflow: wrap;
`;

export const PriceContainer = styled.div`
  display: flex;
  padding-top: 40px;
  height: 100%;
  width: 50%;
  justify-content: center;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  max-width: 170px;
  gap: 10px;
  align-items: end;
  justify-content: start;
`;
export const PriceContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  gap: 5px;
  justify-content: start;
  cursor: pointer;
`;
export const NFTImage = styled.img``;
export const Price = styled.p`
  font-family: Poppins;
  font-size: ${props => props.theme.typography.fontSizeLarge}rem;
  color: ${props => props.theme.palette.text.light};
  font-weight: ${props => props.theme.typography.fontWeightBolder};
`;
export const Adopt = styled.p`
  font-size: ${props => props.theme.typography.fontSizeRegular}rem;
  color: ${props => props.theme.palette.text.light};
  font-weight: ${props => props.theme.typography.fontWeightThin};
`;
export const BeachNumberContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MarginLeft = styled.div`
  width: 100%;
  padding-left: 30%;
`;
export const BeachNumber = styled.p`
  text-align: center;
  font-family: Poppins;
  line-height: 100%;
  font-size: ${props => props.theme.typography.fontSizeLarge}rem;
  color: ${props => props.theme.palette.text.light};
  font-weight: ${props => props.theme.typography.fontWeightBold};
`;
export const BeachText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  line-height: 100%;
  color: ${props => props.theme.palette.text.light};
  font-weight: ${props => props.theme.typography.fontWeightThin};
  margin-bottom: 3px;
`;
export const YearContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const YearNumber = styled.p`
  letter-spacing: -2px;
  text-align: center;
  font-family: poppins;
  line-height: 120%;
  font-size: ${props => props.theme.typography.fontSizeMedium}rem;
  color: ${props => props.theme.palette.title.regular};
  font-weight: ${props => props.theme.typography.fontWeightRegular};
`;
export const YearText = styled.p`
  text-align: center;
  font-size: ${props => props.theme.typography.fontSizeRegular}rem;
  line-height: 100%;
  color: #4d4f5180;
  font-weight: ${props => props.theme.typography.fontWeightThin};
  margin-bottom: 3px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const ImgArrow = styled.img``;
export const ButtonTitle = styled.p`
  margin: auto;
  line-height: 30px;
  font-weight: ${(props: { theme: { typography: { fontWeightBold: any } } }) =>
    props.theme.typography.fontWeightBold + 100};
  font-size: ${(props: { theme: { typography: { fontSizeRegular: any } } }) =>
    props.theme.typography.fontSizeRegular + 0.7}rem;
`;
