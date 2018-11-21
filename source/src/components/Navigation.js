import React, { PureComponent } from 'react';

import classNames from 'classnames';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const navItems = [
    {
        title: 'Início',
        to: 'page-top',
    },
    {
        title: 'Sobre Nós',
        to: 'about',
    },
    {
        title: 'Serviços',
        to: 'services',
    },
    {
        title: 'Portfólio',
        to: 'portfolio',
    },
    {
        title: 'Contato',
        to: 'formContato',
    },
];

export default class Navigation extends PureComponent {

    state = {
        active: false,
    }

    _onOpenCloseMenu = () => {
        this.setState(state => ({
            active: !state.active,
        }));
    }

    _onCloseMenu = () => {
        this.setState({
            active: false,
        });
    }

    render() {
        const { active } = this.state;
        return (
            <React.Fragment>
                <a
                    className="menu-toggle rounded"
                    onClick={this._onOpenCloseMenu}
                    role="button"
                    tabIndex="-1"
                >
                    {active
                        ? (
                            <FaTimes />
                        )
                        : (
                            <FaBars />
                        )
                    }
                </a>
                <nav
                    id="sidebar-wrapper"
                    className={classNames({
                        active,
                    })}
                >
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <Link
                                className="js-scroll-trigger"
                                onClick={this._onCloseMenu}
                                to="page-top"
                                smooth
                            >
                                Smarppy
                            </Link>
                        </li>

                        {navItems.map(item => (
                            <li key={item.title} className="sidebar-nav-item">
                                <Link
                                    className="js-scroll-trigger"
                                    onClick={this._onCloseMenu}
                                    to={item.to}
                                    smooth
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
            </React.Fragment>
        );
    }

}
