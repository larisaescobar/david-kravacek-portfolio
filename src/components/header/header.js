import React, { PureComponent } from 'react';
import './header.css';

export default class Header extends React.PureComponent {  
    render() {
      return (
        <header>
            <img src={this.props.logoSrc} alt="logo" /> 
            <div className='hero'>
              <div className='top-div'>
              <h1>Hi I'm David</h1><div id='dash'></div>
              </div>
              <h1>your guide through <span className='pinkHighlight'>digital design</span>.</h1>
            </div>
            <div>
              <a href="#Body">
                <img src={this.props.arrowSrc} alt="arrow" /> 
              </a>
            </div>
        </header>
      )
    }
  }

