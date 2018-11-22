import React, { PureComponent } from 'react';

import { Element } from 'react-scroll';
import {
    Container, Row, Col,
    Modal, ModalHeader, ModalBody,
    ModalFooter, Button,
} from 'reactstrap';

const projects = [
    {
        title: 'GóvFácil Cidadão',
        description: 'Sistema Eletrônico do Serviço de Informações ao Cidadão (e-SIC)',
        longDescription: (
            <div>
                <span>Cliente: <a href="#">GovFácil</a> </span>
                Data: 2018
                Categoria: Mobile, Web
                Tecnologias: Node JS, Express, Bookshelf, MySQL, Nginx, SSL,
                    React JS, React Native, Android e iOS
            </div>
        ),
        image: require('../drawables/portfolio-1.jpg'),
    },
    // {
    //     title: 'GóvFácil Gabinete',
    //     description: 'Sistema para tornar a gestão de gabinetes mais eficiente e intuitiva',
    //     image: require('../drawables/portfolio-2.jpg'),
    // },
    {
        title: 'GovFácil',
        description: 'Aplicativo Android e iOS para administração pública',
        longDescription: '',
        image: require('../drawables/portfolio-3.jpg'),
    },
    {
        title: 'Pare Azul Operacional',
        description: 'Aplicativo Android para venda e fiscalização de '
            + 'estacionamento roativo em máquinas POS',
        image: require('../drawables/portfolio-4.jpg'),
    },
    {
        title: 'Lupa Empresas',
        description: 'Aplicativo Android e iOS que atua '
            + 'como uma ferramenta de marketing mobile para atingir e fidelizar clientes',
        longDescription: '',
        image: require('../drawables/portfolio-1.jpg'),
    },
    {
        title: 'Lupa',
        description: 'Aplicativo Android e iOS que atua como uma ferramenta de '
            + 'marketing digital para buscar e seguir empresas locais',
        longDescription: '',
        image: require('../drawables/portfolio-2.jpg'),
    },
    {
        title: 'Aquasafe',
        description: 'Aplicativo Android e iOS para monitoramento do ciclo de tratamento de água',
        longDescription: '',
        image: require('../drawables/portfolio-3.jpg'),
    },
    {
        title: 'Pare Azul',
        description: 'Aplicativo Android e iOS para uso de estacionamento roativo',
        longDescription: '',
        image: require('../drawables/portfolio-4.jpg'),
    },
    {
        title: 'SafraMax SM4',
        description: 'Monitor de Plantio em Android para monitoramento da '
            + 'queda de semente em máquinas plantadeiras',
        longDescription: '',
        image: require('../drawables/portfolio-1.jpg'),
    },
    {
        title: 'SafraMax Ajuda',
        description: 'Aplicativo Android e iOS para auxiliar nos '
            + 'cálculos de plantio e pulverização',
        longDescription: '',
        image: require('../drawables/portfolio-2.jpg'),
    },
    {
        title: 'SafraMax Pedidos',
        description: 'Aplicativo para catálogo de produtos e envio de pedidos por e-mail',
        longDescription: '',
        image: require('../drawables/portfolio-3.jpg'),
    },
];

export default class Portfolio extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        };
    }

    _toggle = (projeto, event) => {
        const { showModal } = this.state;
        this.setState({
            showModal: !showModal,
            projectTitle: projeto.title,
            projectDescription: projeto.description,
            projectLongDescription: projeto.longDescription,
        });
    }

    render() {
        const {
            showModal, projectTitle, projectLongDescription,
            projectDescription,
        } = this.state;
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
                                <a
                                    className="portfolio-item"
                                    onClick={e => this._toggle(proj, e)}
                                    role="button"
                                    tabIndex={0}
                                >
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
                        <Modal
                            isOpen={showModal}
                            toggle={this._toggle}
                            className={this.props.className}
                            centered
                        >
                            <ModalHeader
                                toggle={this._toggle}
                            >
                                {projectTitle}
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <h6>{projectDescription}</h6>
                                    <div>{projectLongDescription}</div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="secondary"
                                    onClick={this._toggle}
                                >
                                    Fechar
                                </Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </Row>
                </Container>
            </Element>
        );
    }

}
