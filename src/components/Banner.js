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
	                <h3 class="heading">Certified Teachers</h3>
	                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
	              </div>
	            </div>      
	          </div>
	          <div class="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-tertiary">
	            <div class="media block-6 d-block text-center">
	              <div class="icon d-flex justify-content-center align-items-center">
	            		<span class="flaticon-reading"></span>
	              </div>
	              <div class="media-body p-2 mt-3">
	                <h3 class="heading">Special Education</h3>
	                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
	              </div>
	            </div>    
	          </div>
	          <div class="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-fifth">
	            <div class="media block-6 d-block text-center">
	              <div class="icon d-flex justify-content-center align-items-center">
	            		<span class="flaticon-books"></span>
	              </div>
	              <div class="media-body p-2 mt-3">
	                <h3 class="heading">Book &amp; Library</h3>
	                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
	              </div>
	            </div>      
	          </div>
	          <div class="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-quarternary">
	            <div class="media block-6 d-block text-center">
	              <div class="icon d-flex justify-content-center align-items-center">
	            		<span class="flaticon-diploma"></span>
	              </div>
	              <div class="media-body p-2 mt-3">
	                <h3 class="heading">Certification</h3>
	                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
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
