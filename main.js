

/* //GET request for data
function getPhotos() {
    axios
        .get('https://jsonplaceholder.typicode.com/photos')
        //.then(res => showOutput(res))
        .then(res => getAlbumIDCount(res))
        .catch(err => console.error(err))
} */

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

/* 
//Save albumID and count number of IDs in each Album
function getAlbumIDCount(res) {
    let albumIDList = [];
    let resData = res.data;
    for (let i = 0; i < resData.length; i++) {
        albumIDList.push(resData[i]["albumId"]);
        
    }
    let uniqueAlbumIDList = [... new Set(albumIDList)];

    console.log(resData[0]);
    //console.log(res.data);
    console.log(uniqueAlbumIDList);

    document.getElementById('dataTable').innerHTML = `
        <div class="card mt-3">
            <div class="card-header">
                Data
            </div>
            <div class="card-body">
                <pre>${uniqueAlbumIDList}</pre>
            </div>
        </div>
    `;
}
 */


/* function showOutput(res) {
    let albumIDList = getAlbumIDCount(res);

    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${albumIDList}</pre>
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
        
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  } */

//Event listeners
document.getElementById('get').addEventListener('click', getBitCoinData);

