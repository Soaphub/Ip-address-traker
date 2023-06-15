import React, { useEffect, useState } from 'react';

const Header = ({getData}) => {

    const [text, setText]= useState("");

    // Changing the height of the map content dynamicallly
    useEffect(()=>{
        const header= document.getElementById("header");
        const length= header.clientHeight;
        
        const footer= document.querySelector(".leaflet-container");
        footer.style.setProperty("--length", length+"px");
    },[])

    // Fetching details for seached ip adddress
    const handleSearch=(e)=>{
        const api= process.env.REACT_APP_API_KEY;
        const url="https://api.ipgeolocation.io/ipgeo?apiKey="+api+"&ip="+text+"&fields=city,state_code,zipcode,time_zone,isp,latitude,longitude";
        e.preventDefault();
        getData(url);
    }

    return (
        <>
            <div className='bg-img' id="header">

                <h1 className='title'>IP Address Tracker</h1>

                <form onSubmit={handleSearch} className='flex justify-center'>

                    <input onChange={(e)=> setText(e.target.value)} className="input-text" 
                        type='text' placeholder='Search for an ip address' name="ip" value={text}>
                    </input>

                    <button id="submit" className='button px-5'>
                        <img className="w-3 h-3 sm:h-4" src='/images/icon-arrow.svg' alt='arrow'></img>
                    </button>

                </form>

            </div>
        </>
    );
}

export default Header;
