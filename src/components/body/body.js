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
                    <div class="section-title">
                        <h2>UI, UX, digital, product, freelance, Prague</h2> <img src={this.props.heart} alt="heart" />
                    </div>
                    <p>Digital and product designer based in Prague (Cze) and graduated in Zlin (MgA.). I enjoy solving problems 
                        and designing new & unique solutions. Let’s <a href='#contact'>get in touch</a> and create something awesome.
                        I can help you with UI, UX, graphic design, motion and 3D.</p>
                </div>
                <div className='section'>
                    <h6>
                        Clients
                    </h6>
                    
                        <h2>Let’s conquer the digital world<a href='#contact'> together</a>.</h2>
                    
                    <p>I've had the opportunity to collaborate with some wonderful companies 
                        start-ups and the incredible people behind them. Here are some of my clients.</p>
                        <div id='clientLogos' className='flex-div'>
                            <img className='clientLogo' src={this.props.redbullLogo} alt="redbull logo" /> 
                            <img className='clientLogo'  src={this.props.mondelezLogo} alt="mondelez logo" /> 
                            <img className='clientLogo'  src={this.props.mewsLogo} alt="mews logo" /> 
                            <img className='clientLogo'  src={this.props.malltvLogo} alt="malltv logo" /> 
                        </div>
                        <div id='clientLogos' className='flex-div'>
                            <img className='clientLogo' src={this.props.bbLogo} alt="bb logo" /> 
                            <img className='clientLogo'  src={this.props.skodaLogo} alt="skoda logo" /> 
                            <img className='clientLogo'  src={this.props.primagoLogo} alt="primago logo" /> 
                            <img className='clientLogo'  src={this.props.tbUniversityLogo} alt="tbUniversity logo" /> 
                        </div>
                </div>
                <footer id='contact' className='section'>
                    <h6>Get in touch</h6>
                    <a href="mailto:hello@davidkravacek.com?subject=Hello David"><h2>hello@davidkravacek.com</h2></a>
                    <div className='footer-div'>
                            <p>Just say hello and we can meet. Btw, you can also find me in</p>
                                <a href="https://dribbble.com/dejvcz/" ><span className='footer-logo' id='drible-logo'></span></a> 
                                <a href='https://www.behance.net/davidkravacek/'><span className='footer-logo' id='behance-logo'></span></a>
                                <a href='https://vimeo.com/dejvcz/'><span className='footer-logo' id='vimeo-logo'></span></a>
                    </div>   
                    <span id='coded-by'>Coded with <img src={this.props.greyheart} alt="heart" /> by <a className='footer-anchor' href='https://larisaescobar.github.io' target='_blank' rel='noopener noreferrer'>Larisa Escobar</a>.</span> 
                </footer>
            </div>
        )
    }
}

