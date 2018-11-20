import React, { PureComponent } from 'react';

import { Element, Link } from 'react-scroll';

export default class About extends PureComponent {

    state = {}

    render() {
        return (
            <Element className="content-section bg-light" name="about">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                            <p className="lead mb-5">
                                This theme features a flexible, UX friendly
                                sidebar menu and stock photos from our friends at
                                <a href="https://unsplash.com/">Unsplash</a>!
                            </p>
                            <Link
                                className="btn btn-dark btn-xl js-scroll-trigger"
                                to="services"
                                smooth
                            >
                                What We Offer
                            </Link>
                        </div>
                    </div>
                </div>
            </Element>
        );
    }

}
