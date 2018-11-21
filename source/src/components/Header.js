import React, { PureComponent } from 'react';

import { Link } from 'react-scroll';
import { Container } from 'reactstrap';

export default class Header extends PureComponent {

    state = {}

    render() {
        return (
            <header className="masthead d-flex">
                <Container className="text-center my-auto">
                    <h1 className="mb-1">Smarppy</h1>
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
