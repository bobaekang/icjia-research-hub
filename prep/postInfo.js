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

    const appInfoEdited = require('../src/assets/appInfoEdited.json');
    const articleInfoEdited = require('../src/assets/articleInfoEdited0.json');
    const authorInfoEdited = require('../src/assets/authorInfoEdited.json');
    const datasetInfoEdited = require('../src/assets/datasetInfoEdited.json');
    
    postAll(appInfoEdited, baseUrl, 'app');
    postAll(articleInfoEdited, baseUrl, 'article');
    postAll(authorInfoEdited, baseUrl, 'author')
    postAll(datasetInfoEdited, baseUrl, 'dataset');

    // postAppImage(appInfoEdited, baseUrl);
    postArticleSplash(articleInfoEdited, baseUrl);
    postArticlePDF(articleInfoEdited, baseUrl);
    postDatasetData(datasetInfoEdited, baseUrl);
}

/**
 * Post items for a select collection.
 * @param {*} items Items for a select collection 
 * @param {*} baseUrl CMS server URL (Strapi)
 * @param {*} type Content type
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
 * Post item image files from URLs for apps.
 * @param {*} items App items 
 * @param {*} baseUrl CMS server URL (Strapi)
 */
// function postAppImage (items, baseUrl) {
//     const uploadUrl = `${baseUrl}/upload`
//     const collectionUrl = `${baseUrl}/apps`

//     items
//         .forEach(async (el) => {
//             const refId = await getRefId(el, collectionUrl);
//             const fileUrl = `http://icjia.state.il.us/${el.image.url}`;

//             submitFormData(uploadUrl, fileUrl, refId, 'app', 'image');
//         });
// }

/**
 * Post splash image files from URLs for articles.
 * @param {*} items Article items 
 * @param {*} baseUrl CMS server URL (Strapi)
 */
function postArticleSplash (items, baseUrl) {
    const uploadUrl = `${baseUrl}/upload`
    const collectionUrl = `${baseUrl}/articles`
    
    items
        .forEach(async (el) => {
            const refId = await getRefId(el, collectionUrl);
            const fileUrl = `http://icjia.state.il.us/${el.splashUrl}`;

            submitFormData(uploadUrl, fileUrl, refId, 'article', 'splash');
        });
}

/**
 * Post PDF attachment files from URLs for articles.
 * @param {*} items Article items
 * @param {*} baseUrl CMS server URL (Strapi)
 */
function postArticlePDF(items, baseUrl) {
    const uploadUrl = `${baseUrl}/upload`
    const collectionUrl = `${baseUrl}/articles`
    
    items
        .filter(el => el.hasOwnProperty('pdfReportUrl'))
        .forEach(async (el) => {
            const refId = await getRefId(el, collectionUrl);
            const fileUrl = `http://icjia.state.il.us/${el.pdfReportUrl}`;

            submitFormData(uploadUrl, fileUrl, refId, 'article', 'pdfReport');
        });
    
    items
        .filter(el => el.hasOwnProperty('pdfPresentationUrl'))
        .forEach(async (el) => {
            const refId = await getRefId(el, collectionUrl);
            const fileUrl = `http://icjia.state.il.us/${el.pdfPresentationUrl}`;

            submitFormData(uploadUrl, fileUrl, refId, 'article', 'pdfPresentation');
        })
}

/**
 * Post data files from URLs for datasets.
 * @param {*} items Dataset items
 * @param {*} baseUrl CMS server URL (Strapi)
 */
function postDatasetData(items, baseUrl) {
    const uploadUrl = `${baseUrl}/upload`
    const collectionUrl = `${baseUrl}/datasets`
    
    items
        .filter(el => el.hasOwnProperty('datasetfilename'))
        .forEach(async (el) => {
            const refId = await getRefId(el, collectionUrl);
            const fileUrl = `http://icjia.state.il.us/${el.datasetfilename}`;
            
            submitFormData(uploadUrl, fileUrl, refId, 'dataset', 'data');
        });
}

/**
 * Get the ID of a select item.
 * @param {*} el An item of a select content type
 * @param {*} collectionUrl URL to send GET request for a select content type
 */
async function getRefId(el, collectionUrl) {
    const ref = await axios
        .get(collectionUrl, {
            params: { slug: el.slug }
        });

    return ref.data[0].id;
}

/**
 * Upload form data with file for the given content type and field.
 * @param {*} uploadUrl API URL for file upload
 * @param {*} fileUrl File URL
 * @param {*} refId Item reference ID
 * @param {*} type Item content type 
 * @param {*} field Field name for the file
 */
async function submitFormData(uploadUrl, fileUrl, refId, type, field) {
    const form = new FormData();
    form.append('files', request(fileUrl));
    form.append('refId', refId);
    form.append('ref', type);
    form.append('field', field);

    form.submit(uploadUrl, (err, res) => {
        if (err) {
            throw err;
        } else if (res.statusCode == 200) {
            console.log('Sucess: ', fileUrl);    
        } else {
            console.log(res.statusCode);
        }
    })
}