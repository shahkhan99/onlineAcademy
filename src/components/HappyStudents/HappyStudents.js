import React from 'react';
import '../../App.css';
import '../../css/style.css';
import '../../css/aos.css';
import '../../css/bootstrap.min.css';
import '../../css/font-awesome.min.css';
import '../../css/magnific-popup.css';
import '../../css/nice-select.css';
import '../../css/slick.css';
import '../../css/style.map';
import '../../css/swiper.min.css';
import '../../css/themify-icons.css';
import '../../css/animate.css';

export default class HappyStudents extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section class="testimonial_part section_padding">
				<div class="container-fluid">
					<div class="row justify-content-center">
						<div class="col-xl-5">
							<div class="section_tittle text-center">
								{' '}
								<p>tesimonials</p>
								<h2>Happy Students</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<div class="textimonial_iner owl-carousel">
								<div class="testimonial_slider">
									<div class="row">
										<div class="col-lg-8 col-xl-4 col-sm-8 align-self-center">
											<div class="testimonial_slider_text">
												<p>
													Behold place was a multiply creeping creature his domin to thiren
													open void hath herb divided divide creepeth living shall i call
													beginning third sea itself set
												</p>
												<h4>Michel Hashale</h4>
												<h5> Sr. Web designer</h5>
											</div>
										</div>
										<div class="col-lg-4 col-xl-2 col-sm-4">
											<div class="testimonial_slider_img">
												<img src={require('./assets/img/student1.jpg')} alt="#" />
											</div>
										</div>
										<div class="col-xl-4 d-none d-xl-block">
											<div class="testimonial_slider_text">
												<p>
													Behold place was a multiply creeping creature his domin to thiren
													open void hath herb divided divide creepeth living shall i call
													beginning third sea itself set
												</p>
												<h4>Michel Hashale</h4>
												<h5> Sr. Web designer</h5>
											</div>
										</div>
										<div class="col-xl-2 d-none d-xl-block">
											<div class="testimonial_slider_img">
												<img src={require('./assets/img/student2.jpg')} alt="#" />
											</div>
										</div>
									</div>
								</div>
								<div class="testimonial_slider">
									<div class="row">
										<div class="col-lg-8 col-xl-4 col-sm-8 align-self-center">
											<div class="testimonial_slider_text">
												<p>
													Behold place was a multiply creeping creature his domin to thiren
													open void hath herb divided divide creepeth living shall i call
													beginning third sea itself set
												</p>
												<h4>Michel Hashale</h4>
												<h5> Sr. Web designer</h5>
											</div>
										</div>
										<div class="col-lg-4 col-xl-2 col-sm-4">
											<div class="testimonial_slider_img">
												<img src={require('./assets/img/student3.jpg')} alt="#" />
											</div>
										</div>
										<div class="col-xl-4 d-none d-xl-block">
											<div class="testimonial_slider_text">
												<p>
													Behold place was a multiply creeping creature his domin to thiren
													open void hath herb divided divide creepeth living shall i call
													beginning third sea itself set
												</p>
												<h4>Michel Hashale</h4>
												<h5> Sr. Web designer</h5>
											</div>
										</div>
										<div class="col-xl-2 d-none d-xl-block">
											<div class="testimonial_slider_img">
												<img src={require('./assets/img/student4.jpg')} alt="#" />
											</div>
										</div>
									</div>
								</div>
								<div class="testimonial_slider">
									<div class="row">
										<div class="col-lg-8 col-xl-4 col-sm-8 align-self-center">
											<div class="testimonial_slider_text">
												<p>
													Behold place was a multiply creeping creature his domin to thiren
													open void hath herb divided divide creepeth living shall i call
													beginning third sea itself set
												</p>
												<h4>Michel Hashale</h4>
												<h5> Sr. Web designer</h5>
											</div>
										</div>
										<div class="col-lg-4 col-xl-2 col-sm-4">
											<div class="testimonial_slider_img">
												<img src={require('./assets/img/student1.jpg')} alt="#" />
											</div>
										</div>
										<div class="col-xl-4 d-none d-xl-block">
											<div class="testimonial_slider_text">
												<p>
													Behold place was a multiply creeping creature his domin to thiren
													open void hath herb divided divide creepeth living shall i call
													beginning third sea itself set
												</p>
												<h4>Michel Hashale</h4>
												<h5> Sr. Web designer</h5>
											</div>
										</div>
										<div class="col-xl-2 d-none d-xl-block">
											<div class="testimonial_slider_img">
												<img src={require('./assets/img/testimonial_img_1.png')} alt="#" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
