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

import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import AboutUs from '../../components/AboutUs/AboutUs';
import AwesomeFeatures from '../../components/AwesomeFeatures/AwesomeFeature';
import PopularCourses from '../../components/PopularCourses/PopularCourses';
import HappyStudents from '../../components/HappyStudents/HappyStudents';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: '',
			user: '',
			mobile: '',
		};
	}

	render() {
		return (
			<div className="App">
				<header class="main_menu home_menu">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-12">
								<Nav />
							</div>
						</div>
					</div>
				</header>

				{/* REGISTER FORM FOR TEACHER AND STUDENT */}
				<section class="banner_part">
					<div class="container">
						<div class="row align-items-center">
							<Register />
						</div>
					</div>
				</section>
				{/* REGISTER FORM FOR TEACHER AND STUDENT */}

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

				<PopularCourses />
				<section class="advance_feature learning_part">
					<div class="container">
						<div class="row align-items-sm-center align-items-xl-stretch">
							<div class="col-md-6 col-lg-6">
								<div class="learning_member_text">
									<h5>Advance feature</h5>
									<h2>Our Advance Educator Learning System</h2>
									<p>
										Fifth saying upon divide divide rule for deep their female all hath brind mid
										Days and beast greater grass signs abundantly have greater also use over face
										earth days years under brought moveth she star
									</p>
									<div class="row">
										<div class="col-sm-6 col-md-12 col-lg-6">
											<div class="learning_member_text_iner">
												<span class="ti-pencil-alt"></span>
												<h4>Learn Anywhere</h4>
												<p>
													There earth face earth behold she star so made void two given and
													also our
												</p>
											</div>
										</div>
										<div class="col-sm-6 col-md-12 col-lg-6">
											<div class="learning_member_text_iner">
												<span class="ti-stamp"></span>
												<h4>Expert Teacher</h4>
												<p>
													There earth face earth behold she star so made void two given and
													also our
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-6">
								<div class="learning_img">
									<img src={require('../../img/advance_feature_img.png')} alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<HappyStudents />

				<section class="blog_part section_padding">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-xl-5">
								<div class="section_tittle text-center">
									<p>Our Blog</p>
									<h2>Students Blog</h2>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6 col-lg-4 col-xl-4">
								<div class="single-home-blog">
									<div class="card">
										<img
											src={require('../../img/blog/blog_1.png')}
											class="card-img-top"
											alt="blog"
										/>
										<div class="card-body">
											<a href="#" class="btn_4">
												Design
											</a>
											<a href="blog.html">
												<h5 class="card-title">Dry beginning sea over tree</h5>
											</a>
											<p>
												Which whose darkness saying were life unto fish wherein all fish of
												together called
											</p>
											<ul>
												<li>
													{' '}
													<span class="ti-comments"></span>2 Comments
												</li>
												<li>
													{' '}
													<span class="ti-heart"></span>2k Like
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-4">
								<div class="single-home-blog">
									<div class="card">
										<img
											src={require('../../img/blog/blog_2.png')}
											class="card-img-top"
											alt="blog"
										/>
										<div class="card-body">
											<a href="#" class="btn_4">
												Developing
											</a>
											<a href="blog.html">
												<h5 class="card-title">All beginning air two likeness</h5>
											</a>
											<p>
												Which whose darkness saying were life unto fish wherein all fish of
												together called
											</p>
											<ul>
												<li>
													{' '}
													<span class="ti-comments"></span>2 Comments
												</li>
												<li>
													{' '}
													<span class="ti-heart"></span>2k Like
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-4">
								<div class="single-home-blog">
									<div class="card">
										<img
											src={require('../../img/blog/blog_3.png')}
											class="card-img-top"
											alt="blog"
										/>
										<div class="card-body">
											<a href="#" class="btn_4">
												Design
											</a>{' '}
											<a href="blog.html">
												<h5 class="card-title">Form day seasons sea hand</h5>
											</a>
											<p>
												Which whose darkness saying were life unto fish wherein all fish of
												together called
											</p>
											<ul>
												<li>
													{' '}
													<span class="ti-comments"></span>2 Comments
												</li>
												<li>
													{' '}
													<span class="ti-heart"></span>2k Like
												</li>
											</ul>
										</div>
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

export class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			role: 'STUDENT',
		};
	}

	renderStudentRegisterationForm = () => {
		return (
			<form
				class="form-contact contact_form"
				// action="contact_process.php"
				// method="post"
				// novalidate="novalidate"
				id="contactForm"
				// onSubmit={(e) => {
				// 	e.preventDefault();
				// 	this.onSubmit(name, email, message, subject);
				// }}
			>
				<div class="row">
					<div class="col-12">
						<div class="form-group">
							<input
								class="form-control"
								name="name"
								id="name"
								type="text"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Your Full Name'"
								placeholder="Enter Your Full Name"
								onChange={(name) => {
									onChange('name', name.nativeEvent.target.value, this);
								}}
							/>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input
								class="form-control"
								name="email"
								id="email"
								type="text"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Your Email'"
								placeholder="Enter Your Email"
								onChange={(email) => {
									onChange('email', email.nativeEvent.target.value, this);
								}}
							/>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input
								class="form-control"
								name="password"
								id="password"
								type="password"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Password'"
								placeholder="Enter Password"
								onChange={(password) => {
									onChange('password', password.nativeEvent.target.value, this);
								}}
							/>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input
								class="form-control"
								name="user"
								id="user"
								type="text"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Your User Name'"
								placeholder="Enter Your USer Name"
								onChange={(user) => {
									onChange('user', user.nativeEvent.target.value, this);
								}}
							/>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input
								class="form-control"
								name="mobile"
								id="mobile"
								type="number"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Mobile Number'"
								placeholder="Enter Mobile Number"
								onChange={(mobile) => {
									onChange('mobile', mobile.nativeEvent.target.value, this);
								}}
							/>
						</div>
					</div>
				</div>
				<div class="form-group mt-3">
					<button type="submit" class="button button-contactForm btn_1">
						Register
					</button>
				</div>
			</form>
		);
	};
	renderTeacherRegisterationForm = () => {
		return (
			<form
				class="form-contact contact_form"
				// action="contact_process.php"
				// method="post"
				// novalidate="novalidate"
				id="contactForm"
				// onSubmit={(e) => {
				// 	e.preventDefault();
				// 	this.onSubmit(name, email, message, subject);
				// }}
			>
				<div class="row">
					<div class="col-12">
						<div class="form-group">
							<input
								class="form-control"
								name="name"
								id="name"
								type="text"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Your Full Name'"
								placeholder="Enter Your Full Name"
								onChange={(name) => {
									onChange('name', name.nativeEvent.target.value, this);
								}}
							/>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input
								class="form-control"
								name="email"
								id="email"
								type="text"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Your Email'"
								placeholder="Enter Your Email"
								onChange={(email) => {
									onChange('email', email.nativeEvent.target.value, this);
								}}
							/>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input
								class="form-control"
								name="password"
								id="password"
								type="password"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Password'"
								placeholder="Enter Password"
								onChange={(password) => {
									onChange('password', password.nativeEvent.target.value, this);
								}}
							/>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input
								class="form-control"
								name="user"
								id="user"
								type="text"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Your User Name'"
								placeholder="Enter Your USer Name"
								onChange={(user) => {
									onChange('user', user.nativeEvent.target.value, this);
								}}
							/>
							<p>{this.state.user}</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input
								class="form-control"
								name="mobile"
								id="mobile"
								type="number"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Enter Mobile Number'"
								placeholder="Enter Mobile Number"
								onChange={(mobile) => {
									onChange('mobile', mobile.nativeEvent.target.value, this);
								}}
							/>
						</div>
						<p>{this.state.mobile}</p>
					</div>
				</div>
				<div class="form-group mt-3">
					<button type="submit" class="button button-contactForm btn_1">
						Register
					</button>
				</div>
			</form>
		);
	};
	render() {
		let { role } = this.state;
		return (
			<div
				class="banner_text"
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<div class="banner_text_iner">
					<div class="col-lg-8">
						<div
							class="col-lg-7"
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								flex: 1,
								padding: 0,
								boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
								transition: '0.3s',
								marginLeft: '28px',
							}}
						>
							<p
								style={{
									// background: `${
									// 	role == 'STUDENT'
									// 		? 'linear-gradient(to left, #f9b700 51%, #ee390f 100%)'
									// 		: 'black'
									// }`,
									margin: 0,
									display: 'flex',
									flex: 1,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								className={role == 'STUDENT' ? 'btn_1' : 'btn_2'}
								onClick={() => {
									onChange('role', 'STUDENT', this);
								}}
							>
								Student ?
							</p>
							<p
								style={{
									//backgroundColor: `${role == 'TEACHER' ? 'red' : 'black'}`,
									margin: 0,
									display: 'flex',
									flex: 1,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								className={role == 'TEACHER' ? 'btn_1' : 'btn_2'}
								onClick={() => {
									onChange('role', 'TEACHER', this);
								}}
							>
								Teacher ?
							</p>
						</div>

						<div class="col-lg-8">
							<br />
							<h2>
								{role == 'STUDENT' ? 'Student ' : 'Teacher '}
								Registeration
							</h2>
							{role == 'STUDENT'
								? this.renderStudentRegisterationForm()
								: this.renderTeacherRegisterationForm()}
							<br />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
