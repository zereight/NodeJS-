import "./styles.css";

const API_URL = "https://api.coinpaprika.com/v1/tickers";

const coinContainer = document.querySelector(".coinContainer");
let ul = document.createElement("ul");
coinContainer.appendChild(ul);

function handleCoin(coin){
    const li = document.createElement("li");
    coinContainer.appendChild(li);
    li.innerHTML = `<b>Name:</b> ${coin.name},     <b>Price (USD):</b> ${coin.quotes.USD.price}`;
}

const getCoinAPI =  () => {

    fetch(API_URL)
    .then(response => response.json()) //json
    .then( data => {
        console.log("loading...");
            console.log(data);
            data.forEach( coin => handleCoin(coin) );
        }
    ).catch( e => {
        coinContainer.innerHTML = "<span>Loading Error!</span>"
        console.log(e);
    })
}

function init(){
    getCoinAPI();
    const interval_func = setInterval(getCoinAPI, 5000);

}

if(coinContainer){
    init();
}else{
    console.log("Error!");
}