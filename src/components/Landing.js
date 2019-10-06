import React from 'react'
import {Animated} from "react-animated-css"

class Landing extends React.Component {
    render() {
    	//var bg = require('./images/IMG_5210.jpg')
    	var bg = require('./images/bot4.png')
    	//var bg2 = require('./images/bg_2.jpg')
        const { onAboutClick, showLanding, onContactUsClick } = this.props

    	if (showLanding) {
	    	return (
	    		<section className="home-slider owl-carousel">
	    		  <Animated animationInDelay="300" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
			      <div className="slider-item" style={{backgroundImage: "url("+bg+")"}}>
			      	<div className="overlay"></div>
				        <div className="container">
				          <Animated 
				          	animationInDelay="1000" 
				          	animationIn="fadeIn" 
				          	animationOut="fadeOut" 
				          	isVisible={true}>
				          <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
			            <div className="col-md-9 text-center">
				            <h1 className="mb-4">We are The Bot Crew!<span>Creators for better world</span></h1>
				            <Animated animationInDelay="2000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
				            	<p><a href="#" class="btn btn-secondary px-4 py-3 mt-3" onClick={onAboutClick}>Tell me more!</a></p>
				            </Animated>
			            </div>
			        </div>
			        </Animated>
			        </div>
			      </div>
			      </Animated>
			    </section>
	    	)
	    } else { return null}
	}
}

export default Landing;

