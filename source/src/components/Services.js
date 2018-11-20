import React, { PureComponent } from 'react';

import { Element } from 'react-scroll';
import {
    FaMobileAlt, FaPencilAlt,
    FaRegHeart, FaQuestion,
} from 'react-icons/fa';

const services = [
    {
        title: 'Responsive',
        description: 'Looks great on any screen size!',
        icon: <FaMobileAlt />,
    },
    {
        title: 'Redesigned',
        description: 'Looks great on any screen size!',
        icon: <FaPencilAlt />,
    },
    {
        title: 'Favorited',
        description: 'Looks great on any screen size!',
        icon: <FaRegHeart />,
    },
    {
        title: 'Question',
        description: 'Looks great on any screen size!',
        icon: <FaQuestion />,
    },
];

export default class Services extends PureComponent {

    state = {}

    render() {
        return (
            <Element
                className="content-section bg-primary text-white text-center"
                name="services"
            >
                <div className="container">
                    <div className="content-section-heading">
                        <h3 className="text-secondary mb-0">Services</h3>
                        <h2 className="mb-5">What We Offer</h2>
                    </div>
                    <div className="row">

                        {services.map(serv => (
                            <div key={serv.title} className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    {serv.icon}
                                </span>
                                <h4>
                                    <strong>{serv.title}</strong>
                                </h4>
                                <p className="text-faded mb-0">{serv.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </Element>
        );
    }

}
