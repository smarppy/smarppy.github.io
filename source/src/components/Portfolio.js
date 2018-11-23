import React, { PureComponent } from 'react';

import { Element } from 'react-scroll';
import {
    Container, Row, Col,
    Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import appStoreBadge from '../drawables/appstore-badge.svg';
import playBadge from '../drawables/google-play-badge.png';

const BadgeStores = ({ urlGoogle, urlApple }) => (
    <div className="badges-container">
        <a
            href={urlGoogle}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={playBadge}
                alt="Google Play Download"
                className="play-badge"
            />
        </a>
        <a
            href={urlApple}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={appStoreBadge}
                alt="Apple AppStore Download"
            />
        </a>
    </div>
);

const projects = [
    {
        title: 'GovFácil Cidadão',
        description: 'Sistema Eletrônico do Serviço de Informações ao Cidadão (e-SIC)',
        modal: {
            longDescription: (
                <div>
                    Sistema Eletrônico do Serviço de Informações ao Cidadão
                    (e-SIC) desenvolvido para Android, iOS e Web.
                    <BadgeStores
                        urlGoogle="https://play.google.com/store/apps/details?id=br.com.govfacilbrasil.cidadao.app"
                        urlApple="https://itunes.apple.com/br/app/govf%C3%A1cil-cidad%C3%A3o/id1348805843"
                    />
                </div>
            ),
            client: 'GovFácil',
            urlClient: 'http://www.govfacilcidadao.com.br/',
            date: '2018',
            category: 'Mobile, Web',
            technologies: 'Node JS, Express, Bookshelf, MySQL, Nginx, SSL, React JS, React Native, Android e iOS',
            image: require('../drawables/govfacilcidadao.jpg'),
        },
        image: require('../drawables/gov-cidadao-front.jpg'),
    },
    {
        title: 'GovFácil',
        description: 'Aplicativo Android e iOS para administração pública',
        modal: {
            longDescription: (
                <div>
                    Aplicativo Android e iOS para administração pública.
                    <BadgeStores
                        urlGoogle="https://play.google.com/store/apps/details?id=br.com.govfacilbrasil.app"
                        urlApple="https://itunes.apple.com/br/app/gov-f%C3%A1cil/id1321899685"
                    />
                </div>
            ),
            client: 'GovFácil',
            urlClient: 'http://www.govfacilbrasil.com.br/',
            date: '2017',
            category: 'Mobile',
            technologies: 'React Native, Realm DB, PHP (Cake) e PostgreSQL',
            image: require('../drawables/govfacil.jpg'),
        },
        image: require('../drawables/govfacil-front.jpg'),
    },
    {
        title: 'Pare Azul Operacional',
        description: 'Aplicativo para venda e fiscalização de estacionamento rotaivo em máquinas POS',
        modal: {
            longDescription: (
                <div>
                    Aplicativo Android para venda e fiscalização de
                    estacionamento rotativo em máquinas POS.
                </div>
            ),
            client: 'Appmoove',
            urlClient: 'http://www.pareazul.com.br/',
            date: '2017',
            category: 'Mobile',
            technologies: 'React Native, Realm DB, ALPR, NodeJS (express, sequelize) e MySQL',
            image: require('../drawables/pareazul-operacional.png'),
        },
        image: require('../drawables/pare-azul-front.jpg'),
    },
    {
        title: 'Lupa Empresas',
        description: 'Aplicativo que atua como uma ferramenta de marketing'
            + 'mobile para atingir e fidelizar clientes',
        modal: {
            longDescription: (
                <div>
                    Aplicativo Android e iOS que atua como uma ferramenta
                    de marketing mobile para atingir e fidelizar clientes.
                    <BadgeStores
                        urlGoogle="https://play.google.com/store/apps/details?id=ninja.lupa.appEmpresas"
                        urlApple="https://itunes.apple.com/br/app/lupa-empresas-mobile-marketing/id1302456775"
                    />
                </div>
            ),
            client: 'Lupa',
            urlClient: 'http://painel.lupa.ninja/',
            date: '2017',
            category: 'Mobile',
            technologies: 'React-Native, Firebase Cloud Message, Facebook SDK, Google Maps API e Realm DB',
            image: require('../drawables/lupa-empresas.jpg'),
        },
        image: require('../drawables/lupa-front.jpg'),
    },
    {
        title: 'Lupa',
        description: 'Aplicativo que atua como uma ferramenta de marketing '
            + 'digital para buscar e seguir empresas locais',
        modal: {
            longDescription: (
                <div>
                    Aplicativo Android e iOS que atua como uma ferramenta de marketing
                    digital para buscar e seguir empresas locais
                    <BadgeStores
                        urlGoogle="https://play.google.com/store/apps/details?id=ninja.lupa.app"
                        urlApple="https://itunes.apple.com/br/app/lupa-ninja/id1262146298"
                    />
                </div>
            ),
            client: 'Lupa',
            urlClient: 'http://lupa.ninja/',
            date: '2017',
            category: 'Mobile',
            technologies: 'React-Native, Firebase Cloud Message, Facebook SDK, Google Maps API e Realm DB',
            image: require('../drawables/lupa.png'),
        },
        image: require('../drawables/lupa-front.jpg'),
    },
    {
        title: 'Aquasafe',
        description: 'Aplicativo Android e iOS para monitoramento do ciclo de tratamento de água',
        modal: {
            longDescription: (
                <div>
                    Aplicativo Android e iOS para monitoramento do ciclo de tratamento de água.
                    <BadgeStores
                        urlGoogle="https://play.google.com/store/apps/details?id=br.com.saubern.aquasafe"
                        urlApple="https://itunes.apple.com/br/app/aquasafe/id1257926438"
                    />
                </div>
            ),
            client: 'Saubern',
            urlClient: 'http://www.saubern.com.br/',
            date: '2017',
            category: 'Mobile',
            technologies: 'React-Native, Firebase Cloud Message, Realm DB, NodeJS (express, sequelize) e MySQL',
            image: require('../drawables/aquasafe.png'),
        },
        image: require('../drawables/aquasafe-front.jpg'),
    },
    {
        title: 'Pare Azul',
        description: 'Aplicativo Android e iOS para uso de estacionamento roativo',
        modal: {
            longDescription: (
                <div>
                    Aplicativo Android e iOS para uso de estacionamento roativo.
                    <BadgeStores
                        urlGoogle="https://play.google.com/store/apps/details?id=br.com.pareazul.android"
                        urlApple="https://itunes.apple.com/br/app/pare-azul-zona-azul-s%C3%A3o-paulo/id1234032331"
                    />
                </div>
            ),
            client: 'Appmoove',
            urlClient: 'http://www.pareazul.com.br/',
            date: '2016 e 2017',
            category: 'Mobile',
            technologies: 'Java (Android), Swift (iOS), Realm DB, NodeJS (express, sequelize) e MySQL',
            image: require('../drawables/pareazul.jpg'),
        },
        image: require('../drawables/pare-azul-front.jpg'),
    },
    {
        title: 'SafraMax SM4',
        description: 'Monitor de Plantio para monitoramento da queda de semente em máquinas plantadeiras',
        modal: {
            longDescription: (
                <div>
                    Monitor de Plantio em Android para monitoramento da
                    queda de semente em máquinas plantadeiras.
                </div>
            ),
            client: 'SafraMax',
            urlClient: 'http://www.saframax.com/',
            date: '2014 à 2016',
            category: 'Mobile',
            technologies: 'Java (Android), Realm DB, Java EE (GlassFish), JSF, JAX-RS, JPA e PostgreSQL',
            image: require('../drawables/saframax-sm4.png'),
        },
        image: require('../drawables/saframax-front.jpg'),
    },
    {
        title: 'SafraMax Ajuda',
        description: 'Aplicativo Android e iOS para auxiliar nos cálculos de plantio e pulverização',
        modal: {
            longDescription: (
                <div>
                    Aplicativo Android e iOS para auxiliar nos cálculos de plantio e pulverização.
                    <BadgeStores
                        urlGoogle="https://play.google.com/store/apps/details?id=com.saframax.SaframaxAjuda"
                        urlApple="https://itunes.apple.com/br/app/saframax-ajuda/id1164924383"
                    />
                </div>
            ),
            client: 'SafraMax',
            urlClient: 'http://www.saframax.com/',
            date: '2016',
            category: 'Mobile',
            technologies: 'Ionic e Apache Cordova',
            image: require('../drawables/saframax-ajuda.jpg'),
        },
        image: require('../drawables/saframax-verde.jpg'),
    },
    {
        title: 'SafraMax Pedidos',
        description: 'Aplicativo para catálogo de produtos e envio de pedidos por e-mail',
        modal: {
            longDescription: (
                <div>
                    Aplicativo para catálogo de produtos e envio de pedidos por e-mail.
                </div>
            ),
            client: 'SafraMax',
            urlClient: 'http://www.saframax.com/',
            date: '2015',
            category: 'Mobile',
            technologies: 'Java (Android) e Realm DB',
            image: require('../drawables/saframax-pedidos.png'),
        },
        image: require('../drawables/saframax-pedidos-front.jpg'),
    },
];

export default class Portfolio extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedProject: false,
        };
    }

    _openModal = project => {
        this.setState({
            selectedProject: project,
        });
    }

    _closeModal = project => {
        this.setState({
            selectedProject: false,
        });
    }

    _renderModalContent = () => {
        const {
            selectedProject,
        } = this.state;

        if (!selectedProject) return null;

        const { modal } = selectedProject;

        return (
            <React.Fragment>
                <ModalHeader
                    toggle={this._closeModal}
                >
                    {selectedProject.title}
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <div className="modal-wrapper">
                            <img
                                src={modal.image}
                                alt="Screenshot do Projeto"
                                className="img-fluid imagem-descricao-projeto"
                            />
                            <span>{modal.longDescription}</span>
                            <div>
                                <span>Cliente: </span>
                                <a
                                    href={modal.urlClient}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>{modal.client}</strong>
                                </a>
                            </div>
                            <div>Data: <strong>{modal.date}</strong></div>
                            <div>Categoria: <strong>{modal.category}</strong></div>
                            <div>Tecnologias: <strong>{modal.technologies}</strong></div>
                        </div>
                    </Container>
                </ModalBody>
            </React.Fragment>
        );
    }

    render() {
        const {
            selectedProject,
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
                                    onClick={e => this._openModal(proj)}
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
                            isOpen={selectedProject}
                            toggle={this._closeModal}
                            className={this.props.className}
                            centered
                        >
                            {this._renderModalContent()}
                        </Modal>
                    </Row>
                </Container>
            </Element>
        );
    }

}
