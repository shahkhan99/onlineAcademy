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

export default class AboutUs extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section class="learning_part">
				<div class="container">
					<div class="row align-items-sm-center align-items-lg-stretch">
						<div class="col-md-7 col-lg-7">
							<div class="learning_img">
								<img src={require('../AboutUs/assets/img/learning_img.png')} alt="" />
							</div>
						</div>
						<div class="col-md-5 col-lg-5">
							<div class="learning_member_text">
								<h5>About us</h5>
								<h2>Learning with Love and Laughter</h2>
								<p>
									Fifth saying upon divide divide rule for deep their female all hath brind Days and
									beast greater grass signs abundantly have greater also days years under brought
									moveth.
								</p>
								<ul>
									<li>
										<span class="ti-pencil-alt"></span>Him lights given i heaven second yielding
										seas gathered wear
									</li>
									<li>
										<span class="ti-ruler-pencil"></span>Fly female them whales fly them day deep
										given night.
									</li>
								</ul>
								<a href="#" class="btn_1">
									Read More
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
