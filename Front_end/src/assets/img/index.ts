import homeBackground from './home-background.svg';
import rightArrow from './right-arrow.png';
import logo from './logo.svg';
import outlineTurtle from './outline_turtle.svg';
import turtleHomeBackground from './turtle-home-background.png';
import NFTImage from './nft-image.svg';
import arrowBack from './arrow-back.svg';
import ArrowRight from './arrow_right.svg';
import backgroundTurtles from './backgroundTurtles.svg';
import litteTurtle from './litteTurtle.jpg';
import littleStar from './littleStar.svg';
import camera from './camera.svg';
import filter from './filterIcon.svg';
import littleStarBG from './littleStar.jpg';
interface IImage<TValue> {
  [id: string]: TValue;
}

const images: IImage<string> = {
  logo,
  camera,
  filter,
  NFTImage,
  arrowBack,
  ArrowRight,
  littleStar,
  rightArrow,
  litteTurtle,
  littleStarBG,
  outlineTurtle,
  homeBackground,
  backgroundTurtles,
  turtleHomeBackground
};

export const getImage = (id: string) => images[id];

export default images;
