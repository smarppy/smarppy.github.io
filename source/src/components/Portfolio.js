import React, { PureComponent } from 'react';

import { Element } from 'react-scroll';
import { Container, Row, Col } from 'reactstrap';

const projects = [
    {
        title: 'GóvFácil Cidadão',
        description: 'Sistema de intereção entre o poder público e o cidadão.',
        image: require('../drawables/portfolio-1.jpg'),
    },
    {
        title: 'GóvFácil Gabinete',
        description: 'Sistema para tornar a gestão de gabinetes mais eficiente e intuitiva.',
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
                <Container>
                    <div className="content-section-heading text-center">
                        <h3 className="text-secondary mb-0">Portfólio</h3>
                        <h2 className="mb-5">Projetos</h2>
                    </div>

                    <Row className="no-gutters">

                        {projects.map(proj => (
                            <Col key={proj.title} lg="6">
                                <a className="portfolio-item">
                                    <span className="caption">
                                        <span className="caption-content">
                                            <h2>{proj.title}</h2>
                                            <p className="mb-0">{proj.description}</p>
                                        </span>
                                    </span>
                                    <img className="img-fluid" src={proj.image} alt="" />
                                </a>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </Element>
        );
    }

}
