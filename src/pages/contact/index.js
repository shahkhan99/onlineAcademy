import React from 'react';
import { Component } from 'react';
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

class Contact extends Component {
	constructor() {
		super();
		this.state = {
			message: '',
			name: '',
			email: '',
			subject: '',
		};
	}

	onChange = (stateKey, valToUpdate) => {
		this.setState({ [stateKey]: valToUpdate });
	};

	onSubmit = (name, email, message, subject) => {
		if ((name, email, message, subject)) {
			let nameRegExTest = new RegExp(/^[A-Za-z\s]+$/gim).test(name);
			let emailRegExTest = new RegExp(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim
			).test(email);
			let subjectRegExTest = new RegExp(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/gim).test(subject);
			// console.log(nameRegExTest, emailRegExTest, subjectRegExTest);
			let contactInfo = { name, email, message, subject };
			if (nameRegExTest == true && emailRegExTest == true && subjectRegExTest == false) {
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
				alert('ok');
			} else {
				alert('not done');
			}
		} else {
			alert('please fill all the required fields');
		}
	};
	render() {
		let { name, email, message, subject } = this.state;
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
										<h2>Contact Us</h2>
										<p>Home/ Contact Us</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="contact-section section_padding">
					<div class="container">
						<div class="d-none d-sm-block mb-5 pb-4">
							<div id="map" style={{ height: 480 }}></div>
							<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&callback=initMap"></script>
						</div>

						<div class="row">
							<div class="col-12">
								<h2 class="contact-title">Get in Touch</h2>
							</div>
							<div class="col-lg-8">
								<form
									class="form-contact contact_form"
									// action="contact_process.php"
									// method="post"
									// novalidate="novalidate"
									id="contactForm"
									onSubmit={(e) => {
										e.preventDefault();
										this.onSubmit(name, email, message, subject);
									}}
								>
									<div class="row">
										<div class="col-12">
											<div class="form-group">
												<textarea
													class="form-control w-100"
													name="message"
													id="message"
													cols="30"
													rows="9"
													onfocus="this.placeholder = ''"
													onblur="this.placeholder = 'Enter Message'"
													placeholder="Enter Message"
													ref="Message"
													onChange={(message) => {
														this.onChange('message', message.nativeEvent.target.value);
													}}
												></textarea>
												<p>{this.state.message}</p>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<input
													class="form-control"
													name="name"
													id="name"
													type="text"
													onfocus="this.placeholder = ''"
													onblur="this.placeholder = 'Enter your name'"
													placeholder="Enter your name"
													ref="Name"
													onChange={(name) => {
														this.onChange('name', name.nativeEvent.target.value);
													}}
												/>
												<p>{this.state.name}</p>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<input
													class="form-control"
													name="email"
													id="email"
													type="email"
													onfocus="this.placeholder = ''"
													onblur="this.placeholder = 'Enter email address'"
													placeholder="Enter email address"
													ref="Email"
													onChange={(email) => {
														this.onChange('email', email.nativeEvent.target.value);
													}}
												/>
											</div>
											<p>{this.state.email}</p>
										</div>
										<div class="col-12">
											<div class="form-group">
												<input
													class="form-control"
													name="subject"
													id="subject"
													type="text"
													onfocus="this.placeholder = ''"
													onblur="this.placeholder = 'Enter Subject'"
													placeholder="Enter Subject"
													ref="subject"
													onChange={(subject) => {
														this.onChange('subject', subject.nativeEvent.target.value);
													}}
												/>
												<p>{this.state.subject}</p>
											</div>
										</div>
									</div>
									<div class="form-group mt-3">
										<button type="submit" class="button button-contactForm btn_1">
											Send Message
										</button>
									</div>
								</form>
							</div>
							<div class="col-lg-4">
								<div class="media contact-info">
									<span class="contact-info__icon">
										<i class="ti-home"></i>
									</span>
									<div class="media-body">
										<h3>Buttonwood, California.</h3>
										<p>Rosemead, CA 91770</p>
									</div>
								</div>
								<div class="media contact-info">
									<span class="contact-info__icon">
										<i class="ti-tablet"></i>
									</span>
									<div class="media-body">
										<h3>00 (440) 9865 562</h3>
										<p>Mon to Fri 9am to 6pm</p>
									</div>
								</div>
								<div class="media contact-info">
									<span class="contact-info__icon">
										<i class="ti-email"></i>
									</span>
									<div class="media-body">
										<h3>support@colorlib.com</h3>
										<p>Send us your query anytime!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		);
	}
}
export default Contact;
