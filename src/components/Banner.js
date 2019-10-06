import React from 'react'
import {Animated} from "react-animated-css"

class Banner extends React.Component {
    render() {
    	if (this.props.showBanner) {
    	return (
			<section class="ftco-services ftco-no-pb">
			<Animated animationInDelay="2000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
				<div class="container-wrap">
					<div class="row no-gutters">
	          <div class="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-primary">
	            <div class="media block-6 d-block text-center">
	              <div class="icon d-flex justify-content-center align-items-center">
	            		<span class="flaticon-teacher"></span>
	              </div>
	              <div class="media-body p-2 mt-3">
	                <h3 class="heading">Friendly Parents</h3>
	                <p>We have fun together learning and growing with our kids! Parents play a key role at The Bot Crew where we believe in developing the network with all ages!</p>
	              </div>
	            </div>      
	          </div>
	          <div class="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-tertiary">
	            <div class="media block-6 d-block text-center">
	              <div class="icon d-flex justify-content-center align-items-center">
	            		<span class="flaticon-reading"></span>
	              </div>
	              <div class="media-body p-2 mt-3">
	                <h3 class="heading">Education &amp; Inspiration</h3>
	                <p>The projects are fun and educational. We are inspired by each other in every way!</p>
	              </div>
	            </div>    
	          </div>
	          <div class="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-fifth">
	            <div class="media block-6 d-block text-center">
	              <div class="icon d-flex justify-content-center align-items-center">
	            		<span class="flaticon-books"></span>
	              </div>
	              <div class="media-body p-2 mt-3">
	                <h3 class="heading">Books &amp; Tools</h3>
	                <p>You need the right tools to do the right job. Though we are certainly not limited to the materials we are given, we make sure the building blocks are available to get started!</p>
	              </div>
	            </div>      
	          </div>
	          <div class="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-quarternary">
	            <div class="media block-6 d-block text-center">
	              <div class="icon d-flex justify-content-center align-items-center">
	            		<span class="flaticon-diploma"></span>
	              </div>
	              <div class="media-body p-2 mt-3">
	                <h3 class="heading">Achivement</h3>
	                <p>Throughout the course, we celebrate each milesstone and acknoledge everyone's hard work. We are proud of what we learn and achive!</p>
	              </div>
	            </div>      
	          </div>
	         
	        </div>
				</div>
			 </Animated>
			</section>
		)} else {return null}
	}
}

export default Banner;
