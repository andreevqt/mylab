import React from 'react';
import {type HeadFC} from 'gatsby'
import {RTB} from '../components/rtb';
import {Layout} from '../layout';

const BannerPage = () => {
  return (
    <Layout>
      <h1>Баннеры</h1>
      <RTB blockId="R-A-7335445-1" renderTo="yandex_rtb_R-A-7335445-1"/>
    </Layout>
  );
};

export default BannerPage;

export const Head: HeadFC = () => <title>Баннеры</title>
