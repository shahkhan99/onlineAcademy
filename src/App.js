import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Contact from './pages/contact/index';
import Elements from './pages/elements/index';
import Blog from './pages/blogs/index';
import SingleBlog from './pages/single-blog/index';
import Course from './pages/course/index';
import CourseIndex from './pages/course-index/index';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/elements" component={Elements} />
					<Route path="/blog" component={Blog} />
					<Route path="/single_blog" component={SingleBlog} />
					<Route path="/course" component={Course} />
					<Route path="/course_index" component={CourseIndex} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
