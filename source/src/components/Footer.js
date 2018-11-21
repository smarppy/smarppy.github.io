import React, { PureComponent } from 'react';

import moment from 'moment-timezone';
import { Container } from 'reactstrap';

import {
    FaGithub, FaTwitter, FaFacebook,
    FaLinkedin, FaMap,
} from 'react-icons/fa';

import strings from '../values/strings';

const SocialLink = ({ Icon, href }) => (
    <a
        className="social-link rounded-circle text-white"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon />
    </a>
);

export default class Footer extends PureComponent {

    state = {}

    render() {
        return (
            <footer className="footer text-center">
                <Container>
                    <ul className="list-inline mb-5">
                        <li className="list-inline-item">
                            <SocialLink Icon={FaFacebook} href={strings.urlFacebook} />
                        </li>
                        <li className="list-inline-item">
                            <SocialLink Icon={FaTwitter} href={strings.urlTwitter} />
                        </li>
                        <li className="list-inline-item">
                            <SocialLink Icon={FaGithub} href={strings.urlGitHub} />
                        </li>
                        <li className="list-inline-item">
                            <SocialLink Icon={FaLinkedin} href={strings.urlLinkedin} />
                        </li>
                        <li className="list-inline-item">
                            <SocialLink Icon={FaMap} href={strings.urlGoogleMaps} />
                        </li>
                    </ul>
                    <p className="text-muted small mb-0">Copyright &copy; Smarppy {moment().year()}</p>
                </Container>
            </footer>
        );
    }

}
