import { generateMedia } from 'styled-media-query';

type BreakpointsType = {
  huge: string;
  large: string;
  medium: string;
  small: string;
};

export const breakpoints = {
  huge: '1440px',
  large: '1170px',
  medium: '650px',
  small: '425px'
};

const media = generateMedia<BreakpointsType>(breakpoints);

export default media;
