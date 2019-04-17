import React, { PureComponent } from 'react';

const address = encodeURI('Smarppy.com');
const mapSrc = `https://maps.google.com/maps?f=q&source=s_q&geocode=&q=${address}`
    + `&aq=0&sspn=0.128789,0.264187&ie=UTF8&hq=${address}&t=m&z=15&iwloc=A&output=embed`;

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
            </div>
        );
    }

}
