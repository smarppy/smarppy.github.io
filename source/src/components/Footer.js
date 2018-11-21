import React, { PureComponent } from 'react';

import moment from 'moment-timezone';
import { Container } from 'reactstrap';

import {
    FaGithub, FaTwitter, FaFacebook,
    FaLinkedin, FaMap,
} from 'react-icons/fa';

import strings from '../values/strings';

export default class Footer extends PureComponent {

    state = {}

    render() {
        return (
            <footer className="footer text-center">
                <Container>
                    <ul className="list-inline mb-5">
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href={strings.urlFacebook}>
                                <FaFacebook />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href={strings.urlTwitter}>
                                <FaTwitter />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href={strings.urlGitHub}>
                                <FaGithub />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href={strings.urlLinkedin}>
                                <FaLinkedin />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white" href={strings.urlGoogleMaps}>
                                <FaMap />
                            </a>
                        </li>
                    </ul>
                    <p className="text-muted small mb-0">Copyright &copy; Smarppy {moment().year()}</p>
                </Container>
            </footer>
        );
    }

}
