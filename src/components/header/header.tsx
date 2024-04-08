import React from 'react';
import {Link} from 'gatsby';

import {Wrapper, Logo} from './header.styles';
import {Container} from '../container';
import {asset} from '../../utils';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to='/'>
          <Logo>
            <img src={asset('/images/logo-red.svg')} alt="logo" />
            Yandex <span>&nbsp;Ads</span>
          </Logo>
        </Link>
      </Container>
    </Wrapper>
  );
};
