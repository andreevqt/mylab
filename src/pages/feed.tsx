import React from 'react';
import {type HeadFC} from 'gatsby'
import {RTB} from '../components/rtb';
import {Layout} from '../layout';

const BannerPage = () => {
  return (
    <Layout>
      <h1>Лента</h1>
      <RTB blockId="R-A-7335445-5" renderTo="yandex_rtb_R-A-7335445-5" type="feed"/>
    </Layout>
  );
};

export default BannerPage;

export const Head: HeadFC = () => <title>Лента</title>
