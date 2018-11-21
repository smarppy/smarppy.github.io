import React, { PureComponent } from 'react';

const address = encodeURI('Rua Siriema, 157, Vila Teixeira, Campo Mourão - PR, 87300-220');
const mapSrc = `https://maps.google.com/maps?f=q&source=s_q&hl=pt-BR&geocode=&q=${address}`
    + `&aq=0&oq=twitter&sspn=0.128789,0.264187&ie=UTF8&hq=${address}&t=m&z=15&iwloc=A&output=embed`;
const mapLink = `https://maps.google.com/maps?f=q&source=embed&hl=pt-BR&geocode=&q=${address}`
    + `&aq=0&oq=twitter&sspn=0.128789,0.264187&ie=UTF8&hq=${address}&t=m&z=15&iwloc=A`;

export default class AddressMap extends PureComponent {

    state = {}

    render() {
        return (
            <div className="map">
                <iframe
                    title="Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    src={mapSrc}
                />
                <br />
                <small>
                    <a
                        href={mapLink}
                    >
                        <br />
                    </a>
                </small>
            </div>
        );
    }

}
