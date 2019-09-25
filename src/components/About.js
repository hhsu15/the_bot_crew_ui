import React from 'react'
import {Animated} from "react-animated-css"

const About = ( {showAbout, onContactUsClick} ) => {
	   var bg = require('./images/car1.jpg')
       
	   if (showAbout) {
		return(
		  <div>
			<section class="hero-wrap hero-wrap-2" style={{backgroundImage: "url("+bg+")"}}>
		      <div class="overlay"></div>
		      <div class="container">
		        <div class="row no-gutters slider-text align-items-center justify-content-center">
		          <div class="col-md-9 text-center">
		            <h1 class="mb-2 bread">About Us</h1>
		            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>About us <i class="ion-ios-arrow-forward"></i></span></p>
		          </div>
		        </div>
		      </div>
		    </section>
			<section class="ftco-section ftco-no-pt ftc-no-pb">
			<div class="container">
				<div class="row">
					<div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
					  <Animated animationInDelay="500" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
						<div class="text px-4">
	          	<h2 class="mb-4">Welcome to The Bot Crew!</h2>
							<p>Something about the bot crew....</p>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her.</p>
							<p><a href="#" class="btn btn-secondary px-4 py-3" onClick={onContactUsClick}>Contact Us</a></p>
						</div>
					  </Animated>
					</div>
					
					<div class="col-md-7 wrap-about py-5 pr-md-4">
					<Animated animationInDelay="500" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
	      	<h2 class="mb-4">What We Do</h2>
						<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
						<div class="row mt-5">
							<div class="col-lg-6">
								<div class="services-2 d-flex">
									<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-security"></span></div>
									<div class="text">
										<h3>Safety First</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="services-2 d-flex">
									<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-reading"></span></div>
									<div class="text">
										<h3>Regular Classes</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="services-2 d-flex">
									<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-diploma"></span></div>
									<div class="text">
										<h3>Certified Teachers</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="services-2 d-flex">
									<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-education"></span></div>
									<div class="text">
										<h3>Sufficient Classrooms</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="services-2 d-flex">
									<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-jigsaw"></span></div>
									<div class="text">
										<h3>Creative Lessons</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="services-2 d-flex">
									<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-kids"></span></div>
									<div class="text">
										<h3>Sports Facilities</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
							</div>
						</div>
					  </Animated>
					</div>
				</div>
			</div>
		</section>
		<section class="ftco-section testimony-section bg-light">
	      <div class="container">
	        <div class="row justify-content-center mb-5 pb-2">
	          <div class="col-md-8 text-center heading-section">
	          	<span class="subheading">Testimonial</span>
	            <h2 class="mb-4"><span>What Our Team Members</span> Say About Us</h2>
	            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
	          </div>
	        </div>
	        <div class="row  justify-content-center">
	          <div class="col-md-12">
	            <div class="carousel-testimony owl-carousel">
	              
	              <div class="item">
	                <div class="testimony-wrap d-flex">
	                  <div class="user-img mr-4" style={{backgroundImage: "url("+bg+")"}}>
	                  </div>
	                  <div class="text ml-2 bg-light">
	                  	<span class="quote d-flex align-items-center justify-content-center">
	                      <i class="icon-quote-left"></i>
	                    </span>
	                    <p>I love The Bot Crew because I get to build cool stuff!</p>
	                    <p class="name">Kyle</p>
	                    <span class="position">Kid Manager</span>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
	  </div>
		)} else { return null}
}

export default About