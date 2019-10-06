import React from 'react'
import {Animated} from "react-animated-css"

const About = ( {showContactUs} ) => {
	   var bg = require('./images/car1.jpg')
	   const onSendEmail = () => {alert('Nothing is going to happen yet lol')}
	   if (showContactUs) {
		return(
			<div>
				<section class="hero-wrap hero-wrap-2" style={{backgroundImage: "url("+bg+")"}}>
			      <div class="overlay"></div>
			      <div class="container">
			        <div class="row no-gutters slider-text align-items-center justify-content-center">
			          <div class="col-md-9 text-center">
			            <h1 class="mb-2 bread">Contact Us</h1>
			            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Contact us <i class="ion-ios-arrow-forward"></i></span></p>
			          </div>
			        </div>
			      </div>
			    </section>
				<section class="ftco-section contact-section">
			      <div class="container">
			        <div class="row d-flex mb-5 contact-info">
			          <div class="col-md-3 d-flex">
			          	<div class="bg-light align-self-stretch box p-4 text-center">
			          		<h3 class="mb-4">Location</h3>
				            <p>Princeton, New Jersey</p>
				          </div>
			          </div>
			          <div class="col-md-3 d-flex">
			          	<div class="bg-light align-self-stretch box p-4 text-center">
			          		<h3 class="mb-4">Contact Number</h3>
				            <p><a href="tel://1234567920">123456789</a></p>
				          </div>
			          </div>
			          <div class="col-md-3 d-flex">
			          	<div class="bg-light align-self-stretch box p-4 text-center">
			          		<h3 class="mb-4">Email Address</h3>
				            <p><a href="mailto:jessicatung@thebotcrew.com">jessicatung@thebotcrew.com</a></p>
				          </div>
			          </div>
			          <div class="col-md-3 d-flex">
			          	<div class="bg-light align-self-stretch box p-4 text-center">
			          		<h3 class="mb-4">Website</h3>
				            <p><a href="https://thebotcrew.com">thebotcrew.com</a></p>
				          </div>
			          </div>
			        </div>
			      </div>
			    </section>
			    <section class="ftco-section ftco-no-pt ftco-no-pb contact-section">
					<div class="container">
						<div class="row d-flex align-items-stretch no-gutters">
							<div class="col-md-6 p-4 p-md-5 order-md-last bg-light">
								<article action="#">
					              <div class="form-group">
					                <input type="text" class="form-control" placeholder="Your Name"/>
					              </div>
					              <div class="form-group">
					                <input type="text" class="form-control" placeholder="Your Email"/>
					              </div>
					              <div class="form-group">
					                <input type="text" class="form-control" placeholder="Subject"/>
					              </div>
					              <div class="form-group">
					                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
					              </div>
					              <div class="form-group">
					                <input type="submit" value="Send Message To Us" class="btn btn-primary py-3 px-5" onClick={onSendEmail}/>
					              </div>
					            </article>
							</div>
						</div>
					</div>
				</section>

    		</div>
		
		)} else { return null}
}

export default About