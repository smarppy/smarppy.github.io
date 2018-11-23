
import { connectScreenSize as connect } from 'react-screen-size';

export const mapScreenSizeToProps = ({
    xs, sm,
    md, lg,
    gtLg,
}) => ({
    isMobile: xs || sm,
    isTablet: md || lg,
    isDesktop: gtLg,
    xs,
    sm,
    md,
    lg,
    gtLg,
});

export const connectScreenSize = Component => {
    return connect(mapScreenSizeToProps)(Component);
};

export const Medias = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px) and (max-width: 767px)',
    md: '(min-width: 768px) and (max-width: 991px)',
    lg: '(min-width: 992px) and (max-width: 1199px)',
    gtXs: '(min-width: 576px)',
    gtSm: '(min-width: 768px)',
    gtMd: '(min-width: 992px)',
    gtLg: '(min-width: 1200px)',
};

export const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
