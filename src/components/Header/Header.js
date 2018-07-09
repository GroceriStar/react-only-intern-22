import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <header className="clearfix">
				<span>Blueprint <span className="bp-icon bp-icon-about"></span></span>
				<h1>On Scroll Effect Layout</h1>
				<nav>
					<a href="" className="bp-icon bp-icon-prev"><span>Previous Blueprint</span></a>
					<a href="" className="bp-icon bp-icon-next"><span>Next Blueprint</span></a>
					<a href="" className="bp-icon bp-icon-drop"><span>back to the Codrops article</span></a>
					<a href="" className="bp-icon bp-icon-archive"><span>Go to the archive</span></a>
				</nav>
			</header>
        );
    }
}

export default Header;