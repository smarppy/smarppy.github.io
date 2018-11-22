import React, { PureComponent } from 'react';

import { Link } from 'react-scroll';
import { Container } from 'reactstrap';

import smarppy from '../drawables/smarppy_white_ns.png';

export default class Header extends PureComponent {

    state = {}

    render() {
        return (
            <header className="masthead d-flex">
                <Container className="text-center my-auto">
                    <img src={smarppy} alt="" className="img-fluid smarppyName" />
                    <h3 className="mb-5">
                        <em>Consultoria e Desenvolvimento de Software</em>
                    </h3>
                    <Link
                        className="btn btn-secondary btn-xl js-scroll-trigger"
                        to="about"
                        smooth
                    >
                        Conheça-nos
                    </Link>
                </Container>
                <div className="overlay" />
            </header>
        );
    }

}
