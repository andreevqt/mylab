import React, {ReactNode} from 'react';
import {GlobalStyle} from './global-style';
import {Header} from '../components/header';
import {Content} from './layout.styles';

import '../index.css';

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({
  children
}: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        {children}
      </Content>
    </>
  );
};
