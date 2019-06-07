/***
 * Write routes to prerender in JSON
 */
const axios = require('axios')
const dotenv = require('dotenv')
const fs = require('fs')

main()

async function main() {
  dotenv.config({ path: '.env.local' })

  const routes = ['/', '/about', '/apps', '/articles', '/authors', '/datasets']
  const client = axios.create({ baseURL: process.env.VUE_APP_API_BASE_URL })

  const appRoutes = await fetchAppRoutes(client)
  const articleRoutes = await fetchArticleRoutes(client)
  const authorRoutes = await fetchAuthorRoutes(client)
  const datasetRoutes = await fetchDatasetRoutes(client)

  routes.push(...appRoutes)
  routes.push(...articleRoutes)
  routes.push(...authorRoutes)
  routes.push(...datasetRoutes)

  try {
    fs.writeFile('routes.json', JSON.stringify(routes), error => {
      if (error) throw error
    })
  } catch (e) {
    console.error(e)
  }
}

async function baseFetchRoutes(client, type) {
  return await client
    .post('graphql', {
      query: `{
        ${type} {
          slug
        }
      }`
    })
    .catch(err => {
      console.error(err)
    })
}

async function fetchAppRoutes(client) {
  const res = await baseFetchRoutes(client, 'apps')
  return res.data.data.apps.map(el => {
    return `/apps/${el.slug}`
  })
}

async function fetchArticleRoutes(client) {
  const res = await baseFetchRoutes(client, 'articles')
  return res.data.data.articles.map(el => {
    return `/articles/${el.slug}`
  })
}

async function fetchAuthorRoutes(client) {
  const res = await baseFetchRoutes(client, 'authors')
  return res.data.data.authors.map(el => {
    return `/authors/${el.slug}`
  })
}

async function fetchDatasetRoutes(client) {
  const res = await baseFetchRoutes(client, 'datasets')
  return res.data.data.datasets.map(el => {
    return `/datasets/${el.slug}`
  })
}
