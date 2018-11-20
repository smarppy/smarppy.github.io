import React, { PureComponent } from 'react';

import { Link } from 'react-scroll';

export default class Header extends PureComponent {

    state = {}

    render() {
        return (
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-1">Stylish Portfolio</h1>
                    <h3 className="mb-5">
                        <em>A Free Bootstrap Theme by Start Bootstrap</em>
                    </h3>
                    <Link
                        className="btn btn-primary btn-xl js-scroll-trigger"
                        to="about"
                        smooth
                    >
                        Find Out More
                    </Link>
                </div>
                <div className="overlay" />
            </header>
        );
    }

}
