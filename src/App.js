import React, {useEffect, useState} from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Content from "./Components/Content";


function App() {

	const [data, setData] = useState();

	useEffect(() => {
        const api= process.env.REACT_APP_API_KEY;
		const url= "https://api.ipgeolocation.io/ipgeo?apiKey="+api+"&fields=city,state_code,zipcode,time_zone,isp,latitude,longitude";
		getData(url);
	}, []);

	// Fetching data from Api
	const getData= async(url)=>{
		const response= await fetch(url);
		const data = await response.json();
		setData(data);
	}



  return (
	<>
	    <div className="App font-body relative" >

			{ data && <Header getData={getData}/>}

            { data && <Content data={data}/> }
			
			{ data && <Footer data={data}/>}

	    </div>
	</>
  );
}

export default App;
