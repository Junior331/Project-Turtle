import styled from 'styled-components';

export const NewTurtleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fbfbfb;
  button:first-child {
    top: 36px;
    left: 36px;
    position: absolute;
  }
  button:last-child {
    margin-bottom: 30px;
  }
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
export const Img = styled.img<{ margin?: string }>`
  margin: ${props => props.margin};
`;
export const Title = styled.h1`
  max-width: 305px;
  line-height: 100%;
  text-align: center;
  font-family: 'Poppins';
  color: ${props => props.theme.palette.title.regular};
  font-size: ${props => props.theme.typography.fontSizeLarge}rem;
  font-weight: ${props => props.theme.typography.fontWeightMedium};
`;
export const Span = styled.span`
  font-weight: 800;
  color: #00000059;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.theme.typography.fontSizeRegular}rem;
`;
export const Paragraph = styled.p`
  font-weight: 400;
  max-width: 290px;
  text-align: center;
  color: #00000059;
  margin: 20px 0 46px 0;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.theme.typography.fontSizeRegular}rem;
`;
export const ContainerArrows = styled.div`
  width: 100%;
  padding: 26px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  justify-content: flex-end;
  background-color: #efe6d5;
`;
export const Arrow = styled.img`
  width: 12px;
`;
