import React, {useEffect} from 'react';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import { Icon} from 'leaflet';

const Footer = ({data}) => {

    const position= [data.latitude, data.longitude];

    // Function for centering the position of the marker in the screen
    function CenterMap({ center }) {
        const map = useMap();
      
        useEffect(() => {
            map.setView(center, map.getZoom());
        }, [center, map]);
      
        return null;
    }
    
    // Custom Map marker icon
    const customIcon= new Icon({
        iconUrl: "/images/icon-location.svg",
        iconSize: [30, 40]
    })
    
    return (
        <>
            <div className='absolute left-0 -bottom-full -z-10 flex-col h-full w-full'>
    
                <MapContainer 
                    center={position} 
                    zoom={13} 
                >
                    <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    maxZoom={19} >
                    </TileLayer>

                    <Marker position={position} icon={customIcon}>
                        <Popup>
                            {data.isp}
                        </Popup>
                    </Marker>

                    <CenterMap center={position} />
                    
                </MapContainer>
            </div>
        </>
    );
}

export default Footer;
