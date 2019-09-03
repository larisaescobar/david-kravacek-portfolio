import React, { PureComponent } from 'react';
import './body.css';

export default class Body extends React.PureComponent {
    render() {
        return (
            <div id="Body">
                <div className='section'>
                    <h6>
                        Keywords
                    </h6>
                    <h2>UI, UX, digital, product, freelance, Prague<img src={this.props.heart} alt="heart" /> </h2>
                    <p>Digital and product designer based in Prague (Cze) and graduated in Zlin (MgA.). I enjoy solving problems 
                        and designing new & unique solutions. Let’s <a href='#contact'>get in touch</a> and create <br></br>something awesome.
                        I can help you with UI, UX, graphic design, motion and 3D.</p>
                </div>
                <div className='section'>
                    <h6>
                        Clients
                    </h6>
                    <h2>Let’s conquer the digital world <a href='#contact'>together</a>.</h2>
                    <p>I've had the opportunity to collaborate with some wonderful companies <br></br>
                        start-ups and the incredible people behind them. Here are some of my clients.</p>
                        <div id='clientLogos' className='flex-div'>
                            <img id='redbull' src={this.props.redbullLogo} alt="redbull logo" /> 
                            <img id='mondelez'  src={this.props.mondelezLogo} alt="mondelez logo" /> 
                            <img id='mews'  src={this.props.mewsLogo} alt="mews logo" /> 
                            <img id='malltv'  src={this.props.malltvLogo} alt="malltv logo" /> 
                        </div>
                        <div id='clientLogos' className='flex-div'>
                            <img id='bb' src={this.props.bbLogo} alt="bb logo" /> 
                            <img id='skoda'  src={this.props.skodaLogo} alt="skoda logo" /> 
                            <img id='primago'  src={this.props.primagoLogo} alt="primago logo" /> 
                            <img id='tbUniiversity'  src={this.props.tbUniversityLogo} alt="tbUniversity logo" /> 
                        </div>
                </div>
                <footer id='contact' className='section'>
                    <h6>Get in touch</h6>
                    <h2>hello@davidkravacek.com</h2>
                    <div className='flex-div footer-div'>
                        <div>
                            <p>Just say hello and we can meet. Btw, you can also find me in <img src={this.props.dribleLogo} id='drible-logo' className="footer-logo" alt="drible logo" /> <img src={this.props.behanceLogo} id='behance-logo'className="footer-logo" alt="behance logo" /> <img src={this.props.vimeoLogo} id='vimeo-logo' className="footer-logo" alt="vimeo logo" /> .</p>
                        </div>
                        <div>
                            <span>Coded with <img src={this.props.greyheart} alt="heart" /> by <a className='footer-anchor' href='https://larisaescobar.github.io' target='_blank' rel='noopener noreferrer'>Larisa Escobar</a>.</span>
                        </div>
                    </div>    
                </footer>
            </div>
        )
    }
}

