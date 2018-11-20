import React, { PureComponent } from 'react';

import { Element } from 'react-scroll';

const projects = [
    {
        title: 'Stationary',
        description: 'A yellow pencil with envelopes on a clean, blue backdrop!',
        image: require('../drawables/portfolio-1.jpg'),
    },
    {
        title: 'Ice Cream',
        description: 'A yellow pencil with envelopes on a clean, blue backdrop!',
        image: require('../drawables/portfolio-2.jpg'),
    },
    {
        title: 'Strawberries',
        description: 'A yellow pencil with envelopes on a clean, blue backdrop!',
        image: require('../drawables/portfolio-3.jpg'),
    },
    {
        title: 'Workspace',
        description: 'A yellow pencil with envelopes on a clean, blue backdrop!',
        image: require('../drawables/portfolio-4.jpg'),
    },
];

export default class Portfolio extends PureComponent {

    state = {}

    render() {
        return (
            <Element className="content-section" name="portfolio">
                <div className="container">
                    <div className="content-section-heading text-center">
                        <h3 className="text-secondary mb-0">Portfolio</h3>
                        <h2 className="mb-5">Recent Projects</h2>
                    </div>

                    <div className="row no-gutters">

                        {projects.map(proj => (
                            <div key={proj.title} className="col-lg-6">
                                <a className="portfolio-item">
                                    <span className="caption">
                                        <span className="caption-content">
                                            <h2>{proj.title}</h2>
                                            <p className="mb-0">{proj.description}</p>
                                        </span>
                                    </span>
                                    <img className="img-fluid" src={proj.image} alt="" />
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </Element>
        );
    }

}
