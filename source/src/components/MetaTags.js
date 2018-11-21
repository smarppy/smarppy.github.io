import React from 'react';

import DocumentMeta from 'react-document-meta';

const { location } = window;

const url = `${location.protocol}//${location.hostname}${location.port ? `:${location.port}` : ''}`;

const meta = {
    description: 'Consultoria e Desenvolvimento de Software',
    canonical: 'https://smarppy.com',
    meta: {
        name: {
            keywords: 'software+development,desenvolvimento+software,android,ios,iphone,treinamento,curso,consultoria',
            author: 'Smarppy',
            copyright: 'Copyright © Smarppy',
            robots: 'index,nofollow',
            'geo.position': '-24.050361; -52.366555',
            'geo.placename': 'Smarppy',
            'geo.region': 'BR',
            'twitter:card': 'Smarppy - Consultoria e Desenvolvimento de Software',
        },
        property: {
            'og:title': 'Smarppy',
            'og:type': 'website',
            'og:url': 'https://smarppy.com',
            'og:image': url + require('../drawables/capa.png'),
            'og:description': 'Consultoria e Desenvolvimento de Software',
        },
    },
};

const MetaTags = () => (
    <DocumentMeta {...meta} />
);

export default MetaTags;
