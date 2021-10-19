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
import { onChange } from '../../helpers/helper';

export default class Footer extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
		};
	}

	onSubmit = (email) => {
		if (email) {
			let emailRegExTest = new RegExp(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim
			).test(email);
			console.log(emailRegExTest);
			if (emailRegExTest == true) {
				// fetch(`http://localhost:9000/www.ayeunstudien/com/v1/contact-us`, {
				// 	method: 'POST',
				// 	headers: { 'Content-Type': 'appliction/json' },
				// 	body: JSON.stringify(contactInfo),
				// })
				// 	.then((response) => {
				// 		response.json().then((data) => alert(data.message));
				// 	})
				// 	.catch((e) => {
				// 		alert(e);
				// 	});
				alert('Done');
			} else {
				alert('not done');
			}
		} else {
			alert('please fill all the required fields');
		}
	};
	render() {
		let { email } = this.state;
		return (
			<footer class="footer-area">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-sm-6 col-md-4 col-xl-3">
							<div class="single-footer-widget footer_1">
								<a href="index.html">
									{' '}
									<img src={require('../../img/logo.png')} alt="" />{' '}
								</a>
								<p>
									But when shot real her. Chamber her one visite removal sixsending himself boys scot
									exquisite existend an{' '}
								</p>
								<p>But when shot real her hamber her </p>
							</div>
						</div>
						<div class="col-sm-6 col-md-4 col-xl-4">
							<div class="single-footer-widget footer_2">
								<h4>Newsletter</h4>
								<p>
									Stay updated with our latest trends Seed heaven so said place winged over given
									forth fruit.
								</p>
								<form
									//action="#"
									onSubmit={(e) => {
										e.preventDefault();
										this.onSubmit(email);
									}}
								>
									<div class="form-group">
										<div class="input-group mb-3">
											<input
												name="email"
												id="email"
												type="email"
												class="form-control"
												placeholder="Enter email address"
												onfocus="this.placeholder = ''"
												onblur="this.placeholder = 'Enter email address'"
												onChange={(email) => {
													onChange('email', email.nativeEvent.target.value, this);
												}}
											/>

											<div class="input-group-append">
												<button class="btn btn_1" type="submit">
													<i class="ti-angle-right"></i>
												</button>
											</div>
										</div>
									</div>
									{this.state.Remail}
								</form>
								<div class="social_icon">
									<a href="#">
										<i class="ti-facebook"></i>
									</a>
									<a href="#">
										<i class="ti-twitter-alt"></i>
									</a>
									<a href="#">
										<i class="ti-instagram"></i>
									</a>
									<a href="#">
										<i class="ti-skype"></i>
									</a>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-sm-6 col-md-4">
							<div class="single-footer-widget footer_2">
								<h4>Contact us</h4>
								<div class="contact_info">
									<p>
										<span> Address :</span> Hath of it fly signs bear be one blessed after
									</p>
									<p>
										<span> Phone :</span> +2 36 265
									</p>
									<p>
										<span> Email : </span>info@colorlib.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12">
							<div class="copyright_part_text text-center">
								<div class="row">
									<div class="col-lg-12">
										<p class="footer-text m-0">
											Copyright &copy;
											<script>document.write(new Date().getFullYear());</script> All rights
											reserved | AeyunStudien{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
