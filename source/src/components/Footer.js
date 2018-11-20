import React, { PureComponent } from 'react';

import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

export default class Footer extends PureComponent {

    state = {}

    render() {
        return (
            <footer className="footer text-center">
                <div className="container">
                    <ul className="list-inline mb-5">
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="#">
                                <FaFacebook />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white" href="#">
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                    <p className="text-muted small mb-0">Copyright &copy; Your Website 2018</p>
                </div>
            </footer>
        );
    }

}
