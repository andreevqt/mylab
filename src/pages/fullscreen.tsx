import React from 'react';
import {type HeadFC} from 'gatsby'
import {RTB} from '../components/rtb';
import {Layout} from '../layout';

const Fullscreen = () => {
  return (
    <Layout>
      <h1>Полноэкранный</h1>
      <RTB blockId="R-A-7335445-2" type="fullscreen" platform="desktop" />
    </Layout>
  );
};

export default Fullscreen;

export const Head: HeadFC = () => <title>Полноэкранный</title>
