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
export default class Nav extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-light">
				<Link to="/">
					<img src={require('../Nav/assets/img/logo.png')} alt="logo" />
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse main-menu-item justify-content-end" id="navbarSupportedContent">
					<ul class="navbar-nav align-items-center">
						<li class="nav-item active">
							<Link to="/">
								<a class="nav-link" href="index.html">
									Home
								</a>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="/about">
								<a class="nav-link" href="about.html">
									About
								</a>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="/course">
								<a class="nav-link" href="cource.html">
									Courses
								</a>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="/blog">
								<a class="nav-link" href="blog.html">
									Blog
								</a>
							</Link>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Pages
							</a>

							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link to="single_blog">
									<a class="dropdown-item" href="single-blog.html">
										Single blog
									</a>
								</Link>
								<Link to="/elements">
									<a class="dropdown-item" href="elements.html">
										Elements
									</a>
								</Link>
							</div>
						</li>
						<li class="nav-item">
							<Link to="/contact">
								<a class="nav-link" href="contact.html">
									Contact
								</a>
							</Link>
						</li>
						<li class="d-none d-lg-block">
							<a class="btn_1" href="#">
								Get a Quote
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
