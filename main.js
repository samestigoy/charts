


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

    let currentTime = resData["time"]["updated"];
    let currentUSD = resData["bpi"]["USD"]["rate"];
    let currentEUR = resData["bpi"]["EUR"]["rate"];
    let currentGBP = resData["bpi"]["GBP"]["rate"];
    //let currentPrice = resData[""]

    console.log(resData);
    //console.log(res.data);
    //console.log(uniqueAlbumIDList);

    document.getElementById('dataTable').innerHTML = `
        <div class="card mt-3">
            <div class="card-header">
                Bitcoin Information
            </div>
            <div class="card-body">
                <pre>Time: ${currentTime}</pre>
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
            </div>
        </div>
    `;
}

//Event listeners
document.getElementById('get').addEventListener('click', getBitCoinData);

