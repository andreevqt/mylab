import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {type HeadFC} from 'gatsby'
import {RTB} from '../components/rtb';
import {Layout} from '../layout';

const Dummy = styled.div`
   height: 80vh;
   display: flex;
   margin-top: 20%;
   justify-content: center;
`;

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const Blink = styled.h2`
  color: #e36e6e;
  font-size: 38px;
  animation: 1s ${blink} ease-out infinite;
`;

const FloorAd = () => {
  const [hasScrolled, setScrolled] = useState(false);
  useEffect(() => {
    let lastScrollTop =
      window.scrollY || document.documentElement.scrollTop;

    window.addEventListener(
      'scroll',
      function handleScroll() {
        const scrollTopPosition =
          window.scrollY || document.documentElement.scrollTop;

        if (scrollTopPosition > lastScrollTop) {
          setScrolled(true);
        }
      },
      false,
    );
  }, []);
  return (
    <Layout>
      <h1>Floor Ad</h1>
      <RTB blockId="R-A-7335445-4" type="floorAd" platform="desktop" />
      <Dummy>
        {!hasScrolled && <Blink>Скролль вниз</Blink>}
      </Dummy>
    </Layout>
  );
};

export default FloorAd;

export const Head: HeadFC = () => <title>Floor Ad</title>
