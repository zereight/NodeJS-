import "./styles.css";
import axios from "axios";

import "babel-core/register";
import "babel-polyfill";

const API_URL = "http://ip-api.com/json/";

const ipInfo = document.getElementById("ip");


const init= async () => {
    const ip = await axios( { 
        url: API_URL,
        method: "GET"
     } );
     
    const { 
        data: {
            as, city, country, isp, lat, lon, regionName
        }
     } = ip;
     console.log(ip);
    ipInfo.innerHTML = `<p>as: ${as}</p> <p>city: ${city}</p> <p>country: ${country}</p> <p>isp: ${isp}</p> <p>lat: ${lat}</p> <p>lon: ${lon}</p> <p>region: ${regionName}</p>`;
}

if( ipInfo ){
    init();
}