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
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import AboutUs from '../../components/AboutUs/AboutUs';
import AwesomeFeatures from '../../components/AwesomeFeatures/AwesomeFeature';
import HappyStudents from '../../components/HappyStudents/HappyStudents';

function About() {
	return (
		<div className="App">
			<header class="main_menu single_page_menu">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-12">
							<Nav />
						</div>
					</div>
				</div>
			</header>

			<section class="breadcrumb breadcrumb_bg">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="breadcrumb_iner text-center">
								<div class="breadcrumb_iner_item">
									<h2>About Us</h2>
									<p>
										Home<span>/</span>About Us
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<AwesomeFeatures />

			<AboutUs />

			<section class="member_counter">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-sm-6">
							<div class="single_member_counter">
								<span class="counter">1024</span>
								<h4>All Teachers</h4>
							</div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="single_member_counter">
								<span class="counter">960</span>
								<h4> All Students</h4>
							</div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="single_member_counter">
								<span class="counter">1020</span>
								<h4>Online Students</h4>
							</div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="single_member_counter">
								<span class="counter">820</span>
								<h4>Ofline Students</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			<HappyStudents />

			<Footer />

			<script src="js/jquery-1.12.1.min.js"></script>

			<script src="js/popper.min.js"></script>

			<script src="js/bootstrap.min.js"></script>

			<script src="js/jquery.magnific-popup.js"></script>

			<script src="js/swiper.min.js"></script>

			<script src="js/masonry.pkgd.js"></script>

			<script src="js/owl.carousel.min.js"></script>
			<script src="js/jquery.nice-select.min.js"></script>

			<script src="js/slick.min.js"></script>
			<script src="js/jquery.counterup.min.js"></script>
			<script src="js/waypoints.min.js"></script>

			<script src="js/custom.js"></script>
		</div>
	);
}

export default About;
