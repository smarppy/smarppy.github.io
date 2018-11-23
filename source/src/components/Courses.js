import React, { PureComponent } from 'react';

import { Element } from 'react-scroll';
import Slider from 'react-slick';
import {
    Container, Modal, ModalHeader,
    ModalBody,
} from 'reactstrap';
import { connectScreenSize } from '../utils/ScreenSizeHelper';

const courses = [
    {
        title: 'VI CONCCEPAR',
        clientLogo: require('../drawables/vi-conccepar.png'),
        modal: {
            longTitle: 'Minicurso sobre REST',
            description: 'Integrando aplicações de maneira simples e descomplicada utilizando REST.',
            client: 'CONCCEPAR (Congresso Científico da Região Centro-Ocidental do Paraná)',
            clientUrl: 'http://conccepar.grupointegrado.br/',
            date: '2015',
            category: 'Web',
            technologies: 'REST, Java, Jersey',
            image: require('../drawables/vi-conccepar.png'),
        },
    },
    {
        title: 'VII CONCCEPAR',
        clientLogo: require('../drawables/vii-conccepar.png'),
        modal: {
            longTitle: 'Introdução ao desenvolvimento de jogos multiplataforma com LibGDX',
            description: 'Desenvolvimento de jogos 2D multiplataforma em Java com a biblioteca LibGDX.',
            client: 'CONCCEPAR (Congresso Científico da Região Centro-Ocidental do Paraná)',
            clientUrl: 'http://conccepar.grupointegrado.br/',
            date: '2016',
            category: 'Games',
            technologies: 'Java, Android, iOS, LibGDX',
            image: require('../drawables/vii-conccepar.png'),
        },
    },
    {
        title: 'SNCT 2016',
        clientLogo: require('../drawables/snct2016.png'),
        modal: {
            longTitle: 'Introdução ao desenvolvimento de jogos multiplataforma com LibGDX',
            description: 'Desenvolvimento de jogos 2D multiplataforma em Java com a biblioteca LibGDX.',
            client: 'SNCT (Semana Nacional de Ciência e Tecnologia)',
            clientUrl: 'http://semanact.mcti.gov.br/',
            date: '2016',
            category: 'Games',
            technologies: 'Java, Android, iOS, LibGDX',
            image: require('../drawables/snct2016.png'),
        },
    },
    {
        title: 'VIII CONCCEPAR',
        clientLogo: require('../drawables/viii-conccepar.png'),
        modal: {
            longTitle: 'Desenvolvimento Mobile e Backend com JavaScript',
            description: 'Desenvolvimento de API e aplicações mobile com JavaScript.',
            client: 'CONCCEPAR (Congresso Científico da Região Centro-Ocidental do Paraná)',
            clientUrl: 'http://conccepar.grupointegrado.br/',
            date: '2017',
            category: 'Web e Mobile',
            technologies: 'Node JS, Express, Sequelize, React Native, Android, iOS',
            image: require('../drawables/viii-conccepar.png'),
        },
    },
    {
        title: 'UTFPR CM',
        clientLogo: require('../drawables/utfpr-front.png'),
        modal: {
            longTitle: 'Minicurso de Desenvolvimento de Aplicações Web e Mobile com JavaScript',
            description: 'Desenvolvimento de APIs utilizando Node JS, single page application '
                + 'com React JS e aplicativos multiplataforma com React Native.',
            client: 'Universidade Tecnológica Federal do Paraná - Campo Mourão',
            clientUrl: 'http://www.utfpr.edu.br/campomourao',
            date: '2017',
            category: 'Web e Mobile',
            technologies: 'Node JS, Express, Sequelize, React JS, React Native',
            image: require('../drawables/utfpr.jpg'),
        },
    },
    {
        title: 'Hacken',
        clientLogo: require('../drawables/hacken.png'),
        modal: {
            longTitle: 'Curso de Desenvolvimento de Aplicações Web e Mobile com JavaScript',
            description: 'Desenvolvimento de APIs utilizando Node JS, single page application '
                + 'com React JS e aplicativos multiplataforma com React Native.',
            client: 'Hacken - Empresa Júnior de Ciência da Computação',
            clientUrl: 'https://www.facebook.com/HakenEJ/',
            date: '2017',
            category: 'Web e Mobile',
            technologies: 'Node JS, Express, Sequelize, React JS, React Native',
            image: require('../drawables/utfpr.jpg'),
        },
    },
    {
        title: 'Mactus',
        clientLogo: require('../drawables/mactus-front.png'),
        modal: {
            longTitle: 'Curso de Desenvolvimento de Aplicações Web e Mobile com JavaScript',
            description: 'Desenvolvimento de APIs utilizando Node JS, single page '
                + 'application com React JS e aplicativos multiplataforma com React Native.',
            client: 'Mactus Soluções em TI',
            clientUrl: 'http://www.mactus.com.br/',
            date: '2017/2018',
            category: 'Web e Mobile',
            technologies: 'Node JS, Express, Sequelize, React JS, Ant Design, React Native',
            image: require('../drawables/mactus.jpg'),
        },
    },
    {
        title: 'Expresso Nordeste',
        clientLogo: require('../drawables/nordeste-front.png'),
        modal: {
            longTitle: 'Curso de Desenvolvimento de Aplicações Web e Mobile',
            description: 'Desenvolvimento de APIs utilizando PHP Laravel 5.6, '
                + 'single page application com React JS e aplicativos multiplataforma com React Native.',
            client: 'Expresso Nordeste Linhas Rodoviárias',
            clientUrl: 'http://www.expnordeste.com.br/',
            date: '2018',
            category: 'Web e Mobile',
            technologies: 'Laravel 5.6, DB2, React JS, Ant Design, React Native',
            image: require('../drawables/nordeste.jpg'),
        },
    },
    {
        title: 'IX CONCCEPAR',
        clientLogo: require('../drawables/ix-conccepar.png'),
        modal: {
            longTitle: 'Versionamento e revisão de código com Git e GitHub',
            description: 'Versionamento e revisão de código com Git e GitHub.',
            client: 'CONCCEPAR (Congresso Científico da Região Centro-Ocidental do Paraná)',
            clientUrl: 'http://conccepar.grupointegrado.br/',
            date: '2018',
            category: 'Git',
            technologies: 'Git, GitHub, SourceTree',
            image: require('../drawables/ix-conccepar.png'),
        },
    },
];

class Courses extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedCourse: false,
        };
    }

    _openModal = project => {
        this.setState({
            selectedCourse: project,
        });
    }

    _closeModal = () => {
        this.setState({
            selectedCourse: false,
        });
    }

    _renderModalContent = () => {
        const {
            selectedCourse,
        } = this.state;

        if (!selectedCourse) return null;

        const { modal } = selectedCourse;

        return (
            <React.Fragment>
                <ModalHeader
                    toggle={this._closeModal}
                >
                    {modal.longTitle}
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <div className="modal-wrapper">
                            <img
                                src={modal.image}
                                alt="Screenshot do Projeto"
                                className="img-fluid imagem-descricao-projeto"
                            />
                            <span>{modal.description}</span>
                            <div>
                                <span>Cliente: </span>
                                <a
                                    href={modal.clientUrl}
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
            selectedCourse,
        } = this.state;

        const {
            xs, sm,
            md, lg,
        } = this.props;

        let slides;
        if (xs || sm) {
            slides = 1;
        } else if (md) {
            slides = 2;
        } else if (lg) {
            slides = 3;
        } else {
            slides = 4;
        }

        return (
            <Element className="content-section" name="courses">
                <Container>
                    <div className="content-section-heading text-center">
                        <h3 className="text-secondary mb-0">Treinamentos</h3>
                        <h2 className="mb-5">Cursos e Palestras</h2>
                    </div>
                    <Slider
                        dots
                        infinite
                        speed={500}
                        slidesToShow={slides}
                        slidesToScroll={slides}
                        initialSlide={0}
                    >
                        {courses.map(course => (
                            <div key={course.title}>
                                <div
                                    className="slider-item-container"
                                    onClick={e => this._openModal(course)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="slider-item-title">{course.title}</div>
                                    <img
                                        className="slider-item-image"
                                        src={course.clientLogo}
                                        alt="Logo do Cliente"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <Modal
                        isOpen={selectedCourse}
                        toggle={this._closeModal}
                        className={this.props.className}
                        centered
                    >
                        {this._renderModalContent()}
                    </Modal>
                </Container>
            </Element>
        );
    }

}

export default connectScreenSize(Courses);
