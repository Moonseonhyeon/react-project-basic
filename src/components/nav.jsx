import React, { PureComponent } from 'react';

class Nav extends PureComponent {
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