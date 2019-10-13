import React from 'react'
import {Animated} from "react-animated-css"

const About = ( {showAbout, onContactUsClick} ) => {
	   var bg = require('./images/bg6.JPG')
	   var kyle_avitar = require('./images/IMG_7526.jpg')
	   var arjun_avitar = require('./images/bot7.png')
	   var evelyin_avitar = require('./images/bot7.png')
	   var jai_avitar = require('./images/bot7.png')
	   var jarvis_avitar = require('./images/bot7.png')
       
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
				
					  <Animated animationInDelay="500" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
						<div class="text px-4 order-md-last wrap-about py-5 bg-light">
	          				<h2 class="mb-4">Welcome to The Bot Crew!</h2>
							<div class="justify-content-left align-items-left" align="left">
								 
								<p >We are The Bot Crew, a rookie FIRST Lego League Junior team that is made of first garde students. 
                                   The Bot Crew means we work together as boat crew, except we are working with bots! We are based out of West Windsor, New Jersey.</p>

                                <h4 class="mb-4">From Ms. Jess:</h4>
                                <p>If your children are huge Lego fans, WELCOME!</p>
                       
								<p>I am a mom to a 6 years old boy. He started MegaBlocks since age 1, then moved to Duplos at 2, and started regular size at 4. On his 6 years old birthday, he completed the Voltron set all by himself in 8 hours. So then we bought a Lego engine to see if he can assemble Lego parts from different collections and create his own set. He was having so much fun and wouldn’t stop! We knew we had to up the game.</p>
								<p>About the same time, we attended an Innovation Fair held by school district. In there we met several middle and high school students and oh boy, they were so smart, friendly, and most of all, the most passionate kids I’ve seen. I was so surprised to see at this young age, they already found their passion and could elaborate their ideas and share with the community. At age 15, I was just cramming textbooks and had no dreams…</p>
								<p>My son stopped at their stand and wouldn’t leave. He sat and played with the set for about an hour. I wanted to thank the young lady who spent an hour with us, and shared with us about FLL Jr (FIRST Lego League Junior). I had to admit, I was SO CONFUSED with so many acronyms in the beginning. So here is a little summary:</p>
									<ul class="align-items-left">
										<li>FLL Jr (FIRST Lego League Junior): Grades K-4</li>
										<li>FLL (FIRST Lego League): Grades 4–8</li>
										<li>FTC (FIRST Tech Challenge): Grades 7–12</li>
										<li>FRC (FIRST Robotics Competition): Grades 9–12</li>
									</ul>
									<p>What is FIRST?</p>
									<p>FIRST (For Inspiration and Recognition of Science and Technology), a not-for-profit public charity, was founded in 1989 to inspire young people’s interest and participation in science and technology.</p>
									
									<p>FIRST’s website is resourceful, but to be honest, it’s overwhelming for me in the beginning. After Innovation Fair, I spent quite a lot of time researching, attending school district events, getting no response from school district program leaders, keep attending events in other towns, talking to new people, and finally got some ideas.</p>
									<p>I’m sure that are other parents/kids also interested in STEM activities but don’t know where to start. I thought about throwing my son to Code Ninjas or STEAM Works Studio, but the charge was unbelievably high and my son is pretty shy in a new environment. Considering the cost and boosting his confidence, I decided to start our own FLL Jr team with close friends. It will be a great learning experience, and what’s more fun than growing with your kids?</p>
							     
							    <h4 class="mb-4">From Ms. Priyanka:</h4>
                                <p>This is placeholder</p>

                                <h4 class="mb-4">From Ms. Shirley:</h4>
                                <p>This is placeholder</p>

                                <h4 class="mb-4">From Ms. Shweta:</h4>
                                <p>This is placeholder</p>

                                <h4 class="mb-4">From Ms. Vanessa:</h4>
                                <p>This is placeholder</p>
							</div>
							<p><a href="#" class="btn btn-secondary px-4 py-3" onClick={onContactUsClick}>Contact Us</a></p>
						</div>
					  </Animated>
					</div>
					
					<Animated animationInDelay="500" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
					   <div class="wrap-about py-5 pr-md-4">
	      				<h2 class="mb-4">What We Do</h2>
						<p>We strive to make our activities fun and engaging!</p>
						<div class="">
						{
							<div>
								<div class="col-lg-12">
									<div class="services-2 d-flex">
										<div class="icon mt-4 mr-6 d-flex justify-content-center align-items-center"><span class="flaticon-security"></span></div>
										<div class="text  justify-content-center align-items-center">
											<h3>Fall Session</h3>
											<p>FLL Junior Project</p>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="services-2 d-flex">
										<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-security"></span></div>
										<div class="text">
											<h3>Winter Session</h3>
											<p>WeDo Advanced Project</p>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="services-2 d-flex">
										<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-security"></span></div>
										<div class="text">
											<h3>Spring Session</h3>
											<p>WRO Project</p>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="services-2 d-flex">
										<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-security"></span></div>
										<div class="text">
											<h3>Summer Session</h3>
											<p>TBD</p>
										</div>
									</div>
								</div>
							</div>
							// <div class="col-lg-6">
							// 	<div class="services-2 d-flex">
							// 		<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-reading"></span></div>
							// 		<div class="text">
							// 			<h3>STEAM Classes</h3>
							// 			<p>The buzz word STEAM..it is what you think they are.</p>
							// 		</div>
							// 	</div>
							// </div>
							// <div class="col-lg-6">
							// 	<div class="services-2 d-flex">
							// 		<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-diploma"></span></div>
							// 		<div class="text">
							// 			<h3>Certified Teachers</h3>
							// 			<p>Will get certified</p>
							// 		</div>
							// 	</div>
							// </div>
							// <div class="col-lg-6">
			
							// </div>
							// <div class="col-lg-6">
							// 	<div class="services-2 d-flex">
							// 		<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-jigsaw"></span></div>
							// 		<div class="text">
							// 			<h3>Creative Lessons</h3>
							// 			<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							// 		</div>
							// 	</div>
							// </div>
							// <div class="col-lg-6">
							// </div>
						}
						</div>
						</div>
					  </Animated>
		
		</section>
		<section class="ftco-section testimony-section bg-light">
	      <div class="container">
	        <div class="row justify-content-center mb-5 pb-2">
	          <div class="col-md-8 text-center heading-section">
	          	<span class="subheading">Testimonial</span>
	            <h2 class="mb-4"><span>What Our Team Members</span> Say About Us</h2>
	          
	          </div>
	        </div>
	        <div class="row  justify-content-center">
	          <div class="col-md-12">
	            <div class="carousel-testimony owl-carousel">
	              
	              <div class="item">
	                <div class="testimony-wrap d-flex">
	                  <div class="user-img mr-4" style={{backgroundImage: "url("+arjun_avitar+")"}}>
	                  </div>
	                  <div class="text ml-2 bg-light">
	                  	<span class="quote d-flex align-items-center justify-content-center">
	                      <i class="icon-quote-left"></i>
	                    </span>
	                    <p>This is a placeholder</p>
	                    <p class="name">Arjun</p>
	                    <span class="position">Lego Engineer</span>
	                  </div>
	                </div>  
	              </div>
                  <br/>
	              <div class="item">
	                <div class="testimony-wrap d-flex">
	                  <div class="user-img mr-4" style={{backgroundImage: "url("+evelyin_avitar+")"}}>
	                  </div>
	                  <div class="text ml-2 bg-light">
	                  	<span class="quote d-flex align-items-center justify-content-center">
	                      <i class="icon-quote-left"></i>
	                    </span>
	                    <p>This is a placeholder</p>
	                    <p class="name">Evelyn</p>
	                    <span class="position">Lego Engineer</span>
	                  </div>
	                </div>  
	              </div>

	              <br/>
	              <div class="item">
	                <div class="testimony-wrap d-flex">
	                  <div class="user-img mr-4" style={{backgroundImage: "url("+jai_avitar+")"}}>
	                  </div>
	                  <div class="text ml-2 bg-light">
	                  	<span class="quote d-flex align-items-center justify-content-center">
	                      <i class="icon-quote-left"></i>
	                    </span>
	                    <p>This is a placeholder</p>
	                    <p class="name">Jai</p>
	                    <span class="position">Lego Engineer</span>
	                  </div>
	                </div>  
	              </div>

	              <br/>
	              <div class="item">
	                <div class="testimony-wrap d-flex">
	                  <div class="user-img mr-4" style={{backgroundImage: "url("+jarvis_avitar+")"}}>
	                  </div>
	                  <div class="text ml-2 bg-light">
	                  	<span class="quote d-flex align-items-center justify-content-center">
	                      <i class="icon-quote-left"></i>
	                    </span>
	                    <p>This is a placeholder</p>
	                    <p class="name">Jarvis</p>
	                    <span class="position">Lego Engineer</span>
	                  </div>
	                </div>  
	              </div>

	              <br/>
	              <div class="item">
	                <div class="testimony-wrap d-flex">
	                  <div class="user-img mr-4" style={{backgroundImage: "url("+kyle_avitar+")"}}>
	                  </div>
	                  <div class="text ml-2 bg-light">
	                  	<span class="quote d-flex align-items-center justify-content-center">
	                      <i class="icon-quote-left"></i>
	                    </span>
	                    <p>I love The Bot Crew because I get to build cool stuff!</p>
	                    <p class="name">Kyle</p>
	                    <span class="position">Lego Engineer</span>
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