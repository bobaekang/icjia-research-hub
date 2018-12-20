const axios = require('axios');

const appInfo = require('./src/assets/appInfo.json');
const articleInfo = require('./src/assets/articleInfo.json');
const datasetInfo = require('./src/assets/datasetInfo.json');

const API_URL = 'http://localhost:1337';

const postAll = function (arr, collection) {
    const url = `${API_URL}/${collection}`
    arr.forEach(el => {
        axios.post(url, el)
            .then(res => {
                console.log('sucess: ', res.data.title);
            })
            .catch(err => {
                console.log('Error:', err);
            })
    }); 
}

// postAll(appInfo, 'apps');
// postAll(articleInfo, 'articles');
// postAll(datasetInfo, 'datasets');
