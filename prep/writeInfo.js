/***
* Get data from github.com/ICJIA/icjia-public-website/
* and write the select info in JSON.
*/

// load libraries
const axios = require('axios');
const yaml = require('js-yaml');
const fs = require('fs');

// call main
main();

// define functions
function main() {
    const url = 'https://api.github.com/repos/ICJIA/icjia-public-website/contents/_content/'
    const urlArticle = url + '60-articles'
    const urlDataset = url + '88-datasets'
    const headers = { 'User-Agent': 'request' }
    const dirpath = '../src/assets/'
    const nameArticle = 'articleInfo'
    const nameDataset = 'datasetInfo'
    const fieldsArticle = [
        'title',
        'splash',
        'authors',
        'pubtype',
        'area',
        'date',
        'filename',
        'teaser',
        'showTeaser',
    ]
    const fieldsDataset = [
        'title',
        'date',
        'agencyLink',
        'agencyName',
        'juvenileAdult',
        'initialCategory',
        'keywords',
        'timePeriodDesc',
        'filename',
    ]

    writeInfo(urlArticle, headers, dirpath, nameArticle, fieldsArticle);
    writeInfo(urlDataset, headers, dirpath, nameDataset, fieldsDataset);
}

async function writeInfo (url, headers, dirpath, name, fields) {
    try {
        const res = await axios.get(url, headers);
        
        Promise.all(res.data.map(async (el) => {
                return await getInfo(el, fields);
            }))
            .then(infoArr => {
                const filtered = infoArr.filter((el) => {
                    return el != null;
                })

                const sorted = filtered.sort((x, y) => compareDate(y, x));

                writeJSON(sorted, name, dirpath);
            })
            .catch(err => {
                console.log(err);
            });
    } catch (e) {
        console.error(e);
    }
}

function compareDate(x, y) {
    if (x.date < y.date)
        return -1;
    if (x.date > y.date)
        return 1;
    return 0;
} 

async function getInfo (el, fields) {
    try {
        const regex = /^\d{4}-\d{2}-\d{2}/;
        const name = el.name.split('.html')[0];
        
        if (name.match(regex)) {
            const res = await axios.get(el.download_url);
            
            let header = getHeader(res.data);
            header.filename = name.split(regex)[1].slice(1);
            header.date = name.match(regex)[0];
            header.showTeaser = false;

            return pick(header, fields);
        }
    } catch (e) {
        console.log(e);
    }   
}

function getHeader (data) {
    try {
        const header = data.toString().split('---\n')[1].replace(//gu, "");
        return yaml.safeLoad(header, 'utf8');
    } catch (e) {
        console.log(e);
    }
}

function pick(obj, keys) {
    return keys
        .map(k => k in obj ? {[k]: obj[k]} : {})
        .reduce((res, o) => Object.assign(res, o), {});
}

function writeJSON (obj, name, dirpath) {
    try {
        const path = dirpath + name + '.json'
        
        fs.writeFile(path, JSON.stringify(obj), (error) => {
            if (error) throw error;
            console.log('Complete json: ' + name);
        });
    } catch (e) {
        console.log(e);
    }
}
