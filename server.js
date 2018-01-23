const express = require('express')
const app = express()
var https = require('https');
app.set('view engine', 'ejs');
let krakenCurr = [];
let krakenFee = 0;
let bittrexCurr = [];
let bittrexFee = 0;
let exmoCurr = [];
let exmoFee = 0;
let bitcoinCurrency;


function updateKraken()
{
https.get('https://api.kraken.com/0/public/Ticker?pair=XBTUSD', res => {
		  res.setEncoding("utf8");
		  let body = "";
		  res.on("data", data => {
		    body += data;
		  });
		  res.on("end", () => {
		    var data = JSON.parse(body);
		    krakenCurr = [ data.result['XXBTZUSD'].a[0], 
		    				data.result['XXBTZUSD'].b[0] ];
		    console.log("Loaded kraken");
		  });
		});
}
function updateChart()
{
	https.get('https://api.blockchain.info/charts/market-price?timespan=30days&format=json', res => {
		  res.setEncoding("utf8");
		  let body = "";
		  res.on("data", data => {
		    body += data;
		//   	console.log(body);
		  });
		  res.on("end", () => {
		    var data = JSON.parse(body);
		    bitcoinCurrency = data.values;
		    console.log("Loaded chart");
		  });
		});
}
setInterval(updateChart, 10000);

function updateBitTrex()
{
https.get('https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC', res => {
		  res.setEncoding("utf8");
		  let body = "";
		  res.on("data", data => {
		    body += data;
		   // console.log(body);
		  });
		  res.on("end", () => {
		    var data = JSON.parse(body);
		    bittrexCurr = [ data.result.Ask, 
		    				data.result.Bid ];
		    console.log("Loaded bittrex");
		  });
		});
}
function updateExmo()
{
https.get('https://api.exmo.com/v1/ticker/', res => {
		  res.setEncoding("utf8");
		  let body = "";
		  res.on("data", data => {
		    body += data;
		   // console.log(body);
		  });
		  res.on("end", () => {
		    var data = JSON.parse(body);
		    exmoCurr = [ data['BTC_USD'].sell_price, 
		    				data['BTC_USD'].buy_price ];
		    console.log("Loaded exmo");
		  });
		});
}
setInterval(updateKraken, 10000);
setInterval(updateBitTrex, 10000);
setInterval(updateExmo, 10000);
app.get('/', function (req, res) {
    res.render('index', {krakencurr : krakenCurr, bittrexcurr : bittrexCurr , exmocurr:exmoCurr, chart : bitcoinCurrency });
})

app.listen(8080, function () {
  console.log('Website runnning on 8080 port!');
})