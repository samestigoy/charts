


//GET Bitcoin Data
function getBitCoinData() {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //.then(res => showOutput(res))
        .then(res => displayBitcoinData(res))
        .catch(err => console.error(err))
}

//Display Bitcoin Price
function displayBitcoinData(res) {
    
    let resData = res.data;

    //Get Time
    let currentTime = resData["time"]["updated"];

    //Get Prices
    let currentUSD = resData["bpi"]["USD"]["rate"];
    let currentEUR = resData["bpi"]["EUR"]["rate"];
    let currentGBP = resData["bpi"]["GBP"]["rate"];
    
    //Get Disclaimer
    let disclaimer = resData["disclaimer"];

    console.log(resData);
    //console.log(res.data);
    //console.log(uniqueAlbumIDList);

    document.getElementById('dataTable').innerHTML = `
        <div class="card mt-3">
            <div class="card-header">
                Bitcoin Price Information
            </div>
            <div class="card-body">
                <p>Last Refresh: ${currentTime}</p>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Currency</th>
                        <th scope="col">Bitcoin Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>USD</td>
                        <td>${currentUSD}</td>
                        </tr>
                        <tr>
                        <td>EUR</td>
                        <td>${currentEUR}</td>
                        </tr>
                        <tr>
                        <td>GBP</td>
                        <td>${currentGBP}</td>
                        </tr>
                    </tbody>
                </table>
                <p>${disclaimer}</p>
            </div>
        </div>
    `;
}

//Event listeners
//document.getElementById('get').addEventListener('DOMContentLoaded', getBitCoinData);
document.addEventListener("DOMContentLoaded", function() {getBitCoinData();});

var intervalId = window.setInterval(function(){
    getBitCoinData()
    console.log("refreshed")
  }, 300000);
