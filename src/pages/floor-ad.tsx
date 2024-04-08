import React from 'react';
import {type HeadFC} from 'gatsby'
import {RTB} from '../components/rtb';
import {Layout} from '../layout';

const FloorAd = () => {
  return (
    <Layout>
      <h1>Floor Ad</h1>
      <RTB blockId="R-A-7335445-4" type="floorAd" platform="desktop" />
    </Layout>
  );
};

export default FloorAd;

export const Head: HeadFC = () => <title>Баннеры</title>
