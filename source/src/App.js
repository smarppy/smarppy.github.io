import React, { PureComponent } from 'react';

import classNames from 'classnames';
import { FaAngleUp } from 'react-icons/fa';
import { Link, Element } from 'react-scroll';

import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import AddressMap from './components/AddressMap';
import Services from './components/Services';
import About from './components/About';
import Header from './components/Header';
import Navigation from './components/Navigation';
import FormContato from './components/FormContato';

const getScroll = () => {
    if (window.pageYOffset) {
        return [window.pageXOffset, window.pageYOffset];
    }
    const r = document.documentElement;
    const b = document.body;
    const sx = r.scrollLeft || b.scrollLeft || 0;
    const sy = r.scrollTop || b.scrollTop || 0;
    return [sx, sy];
};

const hideSplashScreen = () => {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add('splash-screen-hide');
            setTimeout(
                () => splashScreen.parentNode.removeChild(splashScreen),
                1000,
            );
        }, 2000);
    }
};

export default class App extends PureComponent {

    state = {
        scrollToTopVisible: false,
    }

    componentDidMount() {
        this._onScroll();
        document.addEventListener('scroll', this._onScroll);
        hideSplashScreen();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this._onScroll);
    }

    _onScroll = () => {
        const { 1: y } = getScroll();
        this.setState({
            scrollToTopVisible: y > 100,
        });
    }

    render() {
        const { scrollToTopVisible } = this.state;
        return (
            <Element name="page-top">

                <Navigation />

                <Header />

                <About />

                <Services />

                <Portfolio />

                <FormContato />

                <AddressMap />

                <Footer />

                <Link
                    className={classNames([
                        'scroll-to-top',
                        'rounded',
                        'js-scroll-trigger',
                        {
                            visible: scrollToTopVisible,
                        },
                    ])}
                    to="page-top"
                    smooth
                >
                    <FaAngleUp />
                </Link>

            </Element>
        );
    }

}
