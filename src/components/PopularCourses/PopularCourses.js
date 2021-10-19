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
import { Link } from 'react-router-dom';
export default class PopularCourses extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section class="special_cource padding_top">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xl-5">
							<div class="section_tittle text-center">
								<p>popular courses</p>
								<h2>Special Courses</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 col-lg-4">
							<div class="single_special_cource">
								<img src={require('./assets/img/webdevelopment.jpg')} class="special_img" alt="" />
								<div class="special_cource_text">
									<a href="course-details.html" class="btn_4">
										Web Development
									</a>
									<h4>$130.00</h4>
									<a href="course-details.html">
										<h3>Web Development</h3>
									</a>
									<p>
										Which whose darkness saying were life unto fish wherein all fish of together
										called
									</p>
									<div class="author_info">
										<div class="author_img">
											<img src={require('./assets/img/author/author_1.png')} alt="" />
											<div class="author_info_text">
												<p>Conduct by:</p>
												<h5>
													<a href="#">James Well</a>
												</h5>
											</div>
										</div>
										<div class="author_rating">
											<div class="rating">
												<a href="#">
													<img src={require('../../img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('../../img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('../../img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('../../img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('../../img/icon/star.svg')} alt="" />
												</a>
											</div>
											<p>3.8 Ratings</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-lg-4">
							<div class="single_special_cource">
								<img src={require('./assets/img/webdesign.jpg')} class="special_img" alt="" />
								<div class="special_cource_text">
									<a href="course-details.html" class="btn_4">
										design
									</a>
									<h4>$160.00</h4>
									<a href="course-details.html">
										{' '}
										<h3>Web UX/UI Design </h3>
									</a>
									<p>
										Which whose darkness saying were life unto fish wherein all fish of together
										called
									</p>
									<div class="author_info">
										<div class="author_img">
											<img src={require('./assets/img/author/author_2.png')} alt="" />
											<div class="author_info_text">
												<p>Conduct by:</p>
												<h5>
													<a href="#">James Well</a>
												</h5>
											</div>
										</div>
										<div class="author_rating">
											<div class="rating">
												<a href="#">
													<img src={require('./assets/img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('./assets/img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('./assets/img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('./assets/img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('./assets/img/icon/star.svg')} alt="" />
												</a>
											</div>
											<p>3.8 Ratings</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-lg-4">
							<div class="single_special_cource">
								<img src={require('./assets/img/wordpress.png')} class="special_img" alt="" />
								<div class="special_cource_text">
									<a href="course-details.html" class="btn_4">
										Wordpress
									</a>
									<h4>$140.00</h4>
									<a href="course-details.html">
										{' '}
										<h3>Wordpress Development</h3>{' '}
									</a>
									<p>
										Which whose darkness saying were life unto fish wherein all fish of together
										called
									</p>
									<div class="author_info">
										<div class="author_img">
											<img src={require('../../img/author/author_3.png')} alt="" />
											<div class="author_info_text">
												<p>Conduct by:</p>
												<h5>
													<a href="#">James Well</a>
												</h5>
											</div>
										</div>
										<div class="author_rating">
											<div class="rating">
												<a href="#">
													<img src={require('../../img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('../../img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('../../img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('../../img/icon/color_star.svg')} alt="" />
												</a>
												<a href="#">
													<img src={require('../../img/icon/star.svg')} alt="" />
												</a>
											</div>
											<p>3.8 Ratings</p>
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
