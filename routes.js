/***
 * Write routes to prerender in JSON
 */
const axios = require('axios')
const dotenv = require('dotenv')
const fs = require('fs')

main()

async function main() {
  dotenv.config({ path: '.env.local' })

  const routes = ['/', '/about']
  const client = axios.create({ baseURL: process.env.VUE_APP_API_BASE_URL })

  const appRoutes = await fetchAppRoutes(client)
  const articleRoutes = await fetchArticleRoutes(client)
  const datasetRoutes = await fetchDatasetRoutes(client)

  routes.push(...appRoutes)
  routes.push(...articleRoutes)
  routes.push(...datasetRoutes)

  try {
    fs.writeFile('routes.json', JSON.stringify(routes), error => {
      if (error) throw error
    })
  } catch (e) {
    console.log(e)
  }
}

async function fetchAppRoutes(client) {
  const res = await client
    .post('graphql', {
      query: `{
        apps {
          slug
        }
      }`
    })
    .catch(err => {
      console.error(err)
    })

  return res.data.data.apps.map(el => {
    return `/apps/${el.slug}`
  })
}

async function fetchArticleRoutes(client) {
  const res = await client
    .post('graphql', {
      query: `{
        articles {
          slug
        }
      }`
    })
    .catch(err => {
      console.error(err)
    })

  return res.data.data.articles.map(el => {
    return `/articles/${el.slug}`
  })
}

async function fetchDatasetRoutes(client) {
  const res = await client
    .post('graphql', {
      query: `{
        datasets {
          slug
        }
      }`
    })
    .catch(err => {
      console.error(err)
    })

  return res.data.data.datasets.map(el => {
    return `/datasets/${el.slug}`
  })
}
