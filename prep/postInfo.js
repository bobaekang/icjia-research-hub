/***
* Post data to strapi server
*/

// load libraries
const axios = require('axios');

// call main
main();

// define functions
function main() {
    const api_url = 'http://localhost:1337';

    const appInfoUpdated = require('../src/assets/appInfoUpdated.json');
    const articleInfoUpdated = require('../src/assets/articleInfoUpdated.json');
    const datasetInfoUpdated = require('../src/assets/datasetInfoUpdated.json');
    
    postAll(appInfoUpdated, api_url, 'apps');
    postAll(articleInfoUpdated, api_url, 'articles');
    postAll(datasetInfoUpdated, api_url, 'datasets');
}

function postAll (arr, api_url, collection) {
    const url = `${api_url}/${collection}`
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

