import 'styled-components';
import {
  ButtonType,
  ColorType,
  TextType,
  TitleType,
  TypographyType
} from './interfaces';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      text: TextType;
      title: TitleType;
      button: ButtonType;
      background: {
        yellow: string;
        light: string;
        regular: string;
        default: string;
      };
      error: ColorType;
      success?: ColorType;
      warning?: ColorType;
    };
    typography: TypographyType;
  }
}
