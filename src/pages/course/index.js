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
import PopularCourses from '../../components/PopularCourses/PopularCourses';
import HappyStudents from '../../components/HappyStudents/HappyStudents';
function App() {
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
									<h2>Our Courses</h2>
									<p>
										Home<span>/</span>Courses
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<PopularCourses />

			<HappyStudents />

			<Footer />
		</div>
	);
}

export default App;
