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
    const urlAuthor = url + '75-biographies'
    const urlDataset = url + '88-datasets'
    
    const headers = { 'User-Agent': 'request' }
    const dirpath = './src/assets/'
    
    const nameArticle = 'articleInfo'
    const nameAuthor = 'authorInfo'
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
        'pdf_uploads'
    ]
    const fieldsAuthor = [
        'title',
        'description'
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
        'datasetfilename'
    ]

    writeInfo(urlArticle, headers, dirpath, nameArticle, fieldsArticle);
    writeInfo(urlAuthor, headers, dirpath, nameAuthor, fieldsAuthor);
    writeInfo(urlDataset, headers, dirpath, nameDataset, fieldsDataset);
}

/**
 * Write information of a select content type for select fields.
 * @param {string} url Source URL for the content type
 * @param {string} headers Request headers 
 * @param {string} dirpath Directory path for the file to write
 * @param {string} name Name of the file to write
 * @param {string} fields Fields to write
 */
async function writeInfo (url, headers, dirpath, name, fields) {
    try {
        const res = await axios.get(url, headers);
        
        Promise.all(res.data.map(async (el) => {
                return await getInfo(el, name, fields);
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

/**
 * Compare two objects by date property.
 * @param {Object} x 
 * @param {Object} y 
 */
function compareDate(x, y) {
    if (x.date < y.date)
        return -1;
    if (x.date > y.date)
        return 1;
    return 0;
} 

/**
 * Get item information for select fields from the source.
 * @param {Object} el 
 * @param {string} name 
 * @param {string[]} fields 
 */
async function getInfo (el, name, fields) {
    try {
        const regex = /^\d{4}-\d{2}-\d{2}/;
        const filename = el.name.split('.html')[0];
        
        if (filename.match(regex)) {
            const res = await axios.get(el.download_url);
            
            let data = parseHeader(res.data);
            data.filename = filename.split(regex)[1].slice(1);
            data.date = filename.match(regex)[0];
            data.showTeaser = false;
            
            if (name === 'authorInfo') {
                data.description = parseBody(res.data);
            }

            return pick(data, fields);
        }
    } catch (e) {
        console.log(e);
    }   
}

/**
 * Parse data header.
 * @param {Object} data 
 */
function parseHeader (data) {
    try {
        const header = data.toString().split('---\n')[1].replace(//gu, '');
        return yaml.safeLoad(header, 'utf8');
    } catch (e) {
        console.log(e);
    }
}

/**
 * Parse data body.
 * @param {Object} data 
 */
function parseBody (data) {
    try {
        const tags = /(&nbsp;|<([^>]+)>)/ig
        return data.toString().split('---\n')[2].replace(tags, '').replace('\n', '');
    } catch (e) {
        console.log(e);
    }  
}


/**
 * Pick only select fields of an object. 
 * @param {Object} obj 
 * @param {string[]} keys 
 */
function pick(obj, keys) {
    return keys
        .map(k => k in obj ? {[k]: obj[k]} : {})
        .reduce((res, o) => Object.assign(res, o), {});
}

/**
 * Writing an object into a JSON file.
 * @param {Object} obj 
 * @param {string} name 
 * @param {string} dirpath 
 */
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
