/***
* Post data to strapi server
*/

// load libraries
const axios = require('axios');
const FormData = require('form-data');
const request = require('request');


// call main
main();


// define functions
function main() {
    const baseUrl = 'http://localhost:1337';

    const appInfoEdited = require('files/appInfoEdited.json');
    const articleInfoEdited = require('files/articleInfoEdited.json');
    const authorInfoEdited = require('files/authorInfoEdited.json');
    const datasetInfoEdited = require('files/datasetInfoEdited.json');
    
    postAll(appInfoEdited, baseUrl, 'app');
    postAll(articleInfoEdited, baseUrl, 'article');
    postAll(authorInfoEdited, baseUrl, 'author')
    postAll(datasetInfoEdited, baseUrl, 'dataset');

    putArticleSplash(articleInfoEdited, baseUrl);
    putArticleAuthors(articleInfoEdited, baseUrl);
    postArticlePDF(articleInfoEdited, baseUrl);
    postDatasetData(datasetInfoEdited, baseUrl);
}

/**
 * Post items for a select collection.
 * @param {Object[]} items Items for a select collection 
 * @param {string} baseUrl CMS server URL (Strapi)
 * @param {string} type Content type
 */
function postAll (items, baseUrl, type) {
    items
        .forEach(el => {
            axios
                .post(`${baseUrl}/${type}s`, el)
                .then(res => {
                    console.log('Sucess: ', res.data.title);
                })
                .catch(err => {
                    console.log('Error: ', err);
                })
        }); 
}

/**
 * Put splash image files from URLs for articles.
 * @param {Object[]} items Article items 
 * @param {string} baseUrl CMS server URL (Strapi)
 */
function putArticleSplash (items, baseUrl) {
    const articlesUrl = `${baseUrl}/articles`
    
    items
        .forEach(async el => {
            axios({
                method: 'put',
                url: `${articlesUrl}/${await getRefId(articlesUrl, { slug: el.slug })}`,
                data: {
                    splash:  await getBase64(`http://icjia.state.il.us/${el.splashUrl}`)
                }
            })
            .then(res => {
                if (res.status === 200) {
                    console.log(`Success: ${el.splashUrl} for "${el.title}"`)
                } else {
                    console.log(`Failure: ${el.splashUrl} for "${el.title}"`)
                }
            })
            .catch((err) => {
                console.log(`Failure: ${el.splashUrl} for "${el.title}"`);
            })
        });
}

/**
 * Put authors (relations) for articles.
 * @param {Object[]} items Article items 
 * @param {string} baseUrl CMS server URL (Strapi)
 */
function putArticleAuthors (items, baseUrl) {
    const articlesUrl = `${baseUrl}/articles`;
    const authorsUrl = `${baseUrl}/authors`
    
    items
        .forEach(async el => {
            axios({
                method: 'put',
                url: `${articlesUrl}/${await getRefId(articlesUrl, { slug: el.slug })}`,
                data: {
                    authors: await getAuthorsId(el.authorNames, authorsUrl)
                }
            })
            .then(res => {
                if (res.status === 200) {
                    console.log(`Success: authors for "${el.title}"`)
                } else {
                    console.log(`Failure: authors for "${el.title}"`)
                }
            })
            .catch((err) => {
                console.log(`Failure: authors for "${el.title}"`);
            })
        });
}

/**
 * Post PDF attachment files from URLs for articles.
 * @param {Object[]} items Article items
 * @param {string} baseUrl CMS server URL (Strapi)
 */
function postArticlePDF(items, baseUrl) {
    const uploadUrl = `${baseUrl}/upload`
    const articlesUrl = `${baseUrl}/articles`
    
    items
        .filter(el => el.hasOwnProperty('reportpdfUrl'))
        .forEach(async (el) => {
            const refId = await getRefId(articlesUrl, { slug: el.slug });
            const fileUrl = `http://icjia.state.il.us/${el.reportpdfUrl}`;

            submitFormData(uploadUrl, fileUrl, refId, 'article', 'reportpdf');
        });
    
    items
        .filter(el => el.hasOwnProperty('slidespdfUrl'))
        .forEach(async (el) => {
            const refId = await getRefId(articlesUrl, { slug: el.slug });
            const fileUrl = `http://icjia.state.il.us/${el.slidespdfUrl}`;

            submitFormData(uploadUrl, fileUrl, refId, 'article', 'slidespdf');
        })
}

/**
 * Post data files from URLs for datasets.
 * @param {Object[]} items Dataset items
 * @param {string} baseUrl CMS server URL (Strapi)
 */
function postDatasetData(items, baseUrl) {
    const uploadUrl = `${baseUrl}/upload`
    const datasetsUrl = `${baseUrl}/datasets`
    
    items
        .filter(el => el.hasOwnProperty('datasetfilename'))
        .forEach(async (el) => {
            const refId = await getRefId(datasetsUrl, { slug: el.slug });
            const fileUrl = `http://icjia.state.il.us/${el.datasetfilename}`;
            
            submitFormData(uploadUrl, fileUrl, refId, 'dataset', 'datafile');
        });
}

/**
 * Get the ID of a select item.
 * @param {string} collectionUrl URL to send GET request for a select content type
 * @param {Object} params Parameters
 */
async function getRefId(collectionUrl, params) {
    const res = await axios
        .get(collectionUrl, {
            params: params
        })
        .catch(err => {
            console.log('Failure: fetching refId for ', params);
        })

    try {
        return res.data[0].id;
    } catch {
        console.log('Failure: fetching refId for ', params);
    }
}

/**
 * Upload form data with file for the given content type and field.
 * @param {string} uploadUrl API URL for file upload
 * @param {string} fileUrl File URL
 * @param {string} refId Item reference ID
 * @param {string} type Item content type 
 * @param {string} field Field name for the file
 */
async function submitFormData(uploadUrl, fileUrl, refId, type, field) {
    const form = new FormData();
    form.append('files', request(fileUrl));
    form.append('refId', refId);
    form.append('ref', type);
    form.append('field', field);

    form.submit(uploadUrl, (err, res) => {
        if (err) {
            console.log('Failure: ', fileUrl);
        } else if (res.statusCode == 200) {
            console.log('Sucess: ', fileUrl);    
        } else {
            console.log('Failure: ', fileUrl);
        }
    })
}

/**
 * Return the base64 representation of an image at the given URL
 * @param {*} url Image URL 
 */
async function getBase64(url) {
    const res = await axios.get(url, { responseType: "arraybuffer" });
    const contentType = res.headers["content-type"];
    const unit8Arr = new Uint8Array(res.data);

    let string = ''
    for (i of unit8Arr) {
        string += String.fromCharCode(i);
    }

    return `data:${contentType};base64,${
        Buffer.from(string, "binary").toString("base64")
    }`;
}

/**
 * Return an array of RefIds for the given authors
 * @param {*} authorNames Array of author names
 * @param {*} authorsUrl URL to send GET request for authors content type
 */
async function getAuthorsId(authorNames, authorsUrl) {
    return Promise.all(
        authorNames
            .map(async el => {
                return await getRefId(authorsUrl, { title: el });
            }) 
    );
}