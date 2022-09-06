import React from 'react';
import { GlobalStyles } from '../../../styles/globalStyled';
import { LayoutProps } from './@types';
import * as S from './LayoutStyled';

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutContainer>
      <GlobalStyles />
      <S.LayoutContent>{children}</S.LayoutContent>
    </S.LayoutContainer>
  );
};

export default Layout;
