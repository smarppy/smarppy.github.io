import React, { PureComponent } from 'react';

import { Element, Link } from 'react-scroll';
import { Container, Row, Col } from 'reactstrap';

export default class About extends PureComponent {

    state = {}

    render() {
        return (
            <Element className="content-section bg-light" name="about">
                <Container className="about">
                    <Row>
                        <Col lg="10" className="mx-auto">
                            <h2 className="text-center">Sobre Nós</h2>
                            <p className="lead text-center">
                                Smarppy, aplicações inteligentes.
                            </p>
                            <h4>Missão</h4>
                            <p>
                                Criar, de forma transparente,
                                soluções robustas que contribuam para o objetivo de nossos clientes.
                            </p>
                            <h4>Visão</h4>
                            <p>
                                Ser reconhecida como uma empresa
                                ágil, transparente e comprometida com a entrega de software de qualidade.
                            </p>
                            <h4>Valores</h4>
                            <p>
                                Agilidade, transparência, confiança, evolução contínua e
                                valorização de pessoas.
                            </p>
                            <h4>Sobre a empresa</h4>
                            <p>
                                Fundada em 2017, a Smarppy possui uma equipe com mais de 10 anos
                                de experiência na área de tecnologia da informação.
                            </p>
                            <p>
                                Atualmente com o foco em criação de aplicações para web e
                                dispositivos móveis, a Smarppy considera o desenvolvimento de
                                software uma das mais importantes áreas da atualidade.
                            </p>
                            <p className="mb-5">
                                Pensamos que a liberdade de criação, colaboração e evolução
                                contribuem para o avanço da tecnologia e melhoria na qualidade
                                do software produzido. Por isso, a Smarppy apoia e contribui
                                para o desenvolvimento de software livre.
                            </p>
                            <Link
                                className="btn btn-primary btn-xl js-scroll-trigger"
                                to="services"
                                smooth
                            >
                                Nossos Serviços
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Element>
        );
    }

}
