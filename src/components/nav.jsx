import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <header className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tacker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </header>
        );
    }
}

export default Nav;