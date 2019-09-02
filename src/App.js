import React from 'react';
import logo from './logo.svg';
import arrow from './assets/arrow_down.svg';
import redbull from './assets/redbull.png';
import mondelez from './assets/mondelez.png';
import mews from './assets/mews.png';
import bb from './assets/bb.png';
import prima from './assets/prima.png';
import skoda from './assets/skoda.png';
import tbu from './assets/tbu.png'
import malltv from './assets/malltv.png';
import drible from './assets/dribbble.svg';
import behance from './assets/behance.svg';
import vimeo from './assets/vimeo.svg';
import heart from './assets/heart.svg';
import greyheart from './assets/heart-grey.svg';
import Header from './components/header/header';
import Body from './components/body/body';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="verticalLine leftLine"></div>
      <div className="verticalLine rightLine"></div>
      <Header 
        logoSrc={logo}
        arrowSrc={arrow}
        />
        <Body 
        redbullLogo={redbull}
        mondelezLogo={mondelez}
        mewsLogo={mews}
        malltvLogo={malltv}
        bbLogo={bb}
        skodaLogo={skoda}
        primagoLogo={prima}
        tbUniversityLogo={tbu}
        dribleLogo={drible}
        behanceLogo={behance}
        vimeoLogo={vimeo}
        greyheart={greyheart}
        heart={heart}
        />
    </div>
  );
}

export default App;
