/***
 * Update/modify data in strapi server
 */

// load libraries
const axios = require('axios')

// call main
main()

// define functions
function main() {
  const baseUrl = 'http://localhost:1337'
  const appFields = ['']
  const articleFields = ['']
  const authorFields = ['']
  const datasetFields = ['']

  const appInfoEdited = require('../src/assets/appInfoEdited.json')
  const articleInfoEdited = require('../src/assets/articleInfoEdited.json')
  const authorInfoEdited = require('../src/assets/authorInfoEdited.json')
  const datasetInfoEdited = require('../src/assets/datasetInfoEdited.json')

  // deleteAll(appInfoEdited, baseUrl, 'app');
  // deleteAll(articleInfoEdited, baseUrl, 'article');
  // deleteAll(authorInfoEdited, baseUrl, 'author');
  // deleteAll(datasetInfoEdited, baseUrl, 'dataset');

  // updateAll(appInfoEdited, baseUrl, 'app');
  // updateAll(articleInfoEdited, baseUrl, 'article');
  // updateAll(authorInfoEdited, baseUrl, 'author');
  // updateAll(datasetInfoEdited, baseUrl, 'dataset');

  // updateSelect(appInfoEdited, appFields, baseUrl, 'app');
  // updateSelect(articleInfoEdited, articleFields, baseUrl, 'article');
  // updateSelect(authorInfoEdited, authorFields, baseUrl, 'author');
  // updateSelect(datasetInfoEdited, datasetFields, baseUrl, 'dataset');

  // clearSelect(appInfoEdited, appFields, baseUrl, 'app');
  // clearSelect(articleInfoEdited, articleFields, baseUrl, 'article');
  // clearSelect(authorInfoEdited, authorFields, baseUrl, 'author');
  // clearSelect(datasetInfoEdited, datasetFields, baseUrl, 'dataset');
}

/**
 * Make a DELETE HTTP request for all items of a select content type.
 * @param {Object[]} items
 * @param {string} baseUrl
 * @param {string} type
 */
function deleteAll(items, baseUrl, type) {
  const collectionUrl = `${baseUrl}/${type}s`

  items.forEach(async el => {
    const id = await getRefId(el, collectionUrl)
    const url = `${collectionUrl}/:${id}`

    axios({
      method: 'delete',
      url: url
    }).then(console.log(`Deleted: ${url}`))
  })
}

/**
 * Make a PUT HTTP request with new values for all fields.
 * @param {Object[]} items
 * @param {string} baseUrl
 * @param {string} type
 */
function updateAll(items, baseUrl, type) {
  const collectionUrl = `${baseUrl}/${type}s`

  items.forEach(async el => {
    const id = await getRefId(el, collectionUrl)
    makePutRequest(el, `${collectionUrl}/:${id}`)
  })
}

/**
 * Make a PUT HTTP request with new values for select fields.
 * @param {Object[]} items
 * @param {string[]} fields
 * @param {string} baseUrl
 * @param {string} type
 */
function updateSelect(items, fields, baseUrl, type) {
  const collectionUrl = `${baseUrl}/${type}s`

  items.forEach(async el => {
    const id = await getRefId(el, collectionUrl)
    makePutRequest(pick(el, fields), `${collectionUrl}/:${id}`)
  })
}

/**
 * Make a PUT HTTP request with empty values for select fields.
 * @param {Object[]} items
 * @param {string[]} fields
 * @param {string} baseUrl
 * @param {string} type
 */
function clearSelect(items, fields, baseUrl, type) {
  const collectionUrl = `${baseUrl}/${type}s`

  items.forEach(async el => {
    const id = await getRefId(el, collectionUrl)
    makePutRequest(pick(el, fields), `${collectionUrl}/:${id}`)
  })
}

/**
 * Get the ID of a select item.
 * @param {Object} el An item of a select content type
 * @param {string} collectionUrl URL to send GET request for a select content type
 */
async function getRefId(el, collectionUrl) {
  const ref = await axios.get(collectionUrl, {
    params: { slug: el.slug }
  })

  return ref.data[0].id
}

/**
 * Pick only select fields of an object.
 * @param {Object} obj
 * @param {string[]} keys
 */
function pick(obj, keys) {
  return keys
    .map(k => (k in obj ? { [k]: obj[k] } : {}))
    .reduce((res, o) => Object.assign(res, o), {})
}

/**
 * Make a PUT HTTP request.
 * @param {Object} data
 * @param {string} url
 */
function makePutRequest(data, url) {
  axios({
    method: 'put',
    url: url,
    data: data,
    config: { heaers: { 'Content-type': 'application/json' } }
  }).then(console.log(`Updated: ${url}`))
}
