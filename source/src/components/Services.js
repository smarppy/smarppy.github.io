import React, { PureComponent } from 'react';

import { Element } from 'react-scroll';
import {
    FaGraduationCap, FaSuitcase,
    FaMobileAlt, FaLaptopCode,
} from 'react-icons/fa';
import { Container, Row, Col } from 'reactstrap';

const services = [
    {
        title: 'Treinamentos',
        description: 'Node JS, React, React Native, Git, Docker e outras tecnologias.',
        icon: <FaGraduationCap />,
    },
    {
        title: 'Consultoria',
        description: 'Consultoria em análise e desenvolvimento de sistemas.',
        icon: <FaSuitcase />,
    },
    {
        title: 'Aplicações Móveis',
        description: 'Desenvolvimento de aplicações móveis para as plataformas Android e iOS.',
        icon: <FaMobileAlt />,
    },
    {
        title: 'Aplicações Web',
        description: 'Desenvolvimento de aplicações interativas para a Web.',
        icon: <FaLaptopCode />,
    },
];

export default class Services extends PureComponent {

    state = {}

    render() {
        return (
            <Element
                className="content-section bg-primary text-center"
                name="services"
            >
                <Container className="services">
                    <div className="content-section-heading">
                        <h3 className="text-secondary mb-0">Serviços</h3>
                        <h2 className="mb-5">O Que Nós Ofereçemos</h2>
                    </div>
                    <Row>

                        {services.map(serv => (
                            <Col key={serv.title} lg="3" md="6" className="mb-lg-0">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    {serv.icon}
                                </span>
                                <h4>
                                    <strong>{serv.title}</strong>
                                </h4>
                                <p className="text-faded mb-sm-3 mb-md-0">{serv.description}</p>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </Element>
        );
    }

}
