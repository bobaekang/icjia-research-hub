import axios from 'axios'
import NProgress from 'nprogress'

// const token = axios.post('http')

const client = axios.create({
  baseURL: 'http://localhost:1337',
  headers: {
    // Authorization: `Bearer ${token}`
  }
})

client.interceptors.request.use(config => {
  NProgress.start()
  return config
})

client.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  // apps
  async getApps() {
    return await client
      .post('/graphql', {
        query: `{
        apps (sort: "date:desc", where: { publish: false }) {
          _id
          title
          slug
          date
          categories
          tags
          image
          contributors
          description
          url
          articles (sort: "date:desc", where: { publish: false }) {
            _id
          }
          datasets (sort: "date:desc", where: { publish: false }) {
            _id
          }
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })
  },

  // authors
  async getAuthors() {
    return await client
      .post('/graphql', {
        query: `{
        authors (sort: "title") {
          _id
          title
          slug
          description
          articles (sort: "date:desc", where: { publish: false }) {
            _id
          }
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })
  },

  // articles
  async getArticleBySlug(slug) {
    return await client
      .post('/graphql', {
        query: `{
        articles (where: { slug: "${slug}" }) {
          title
          slug
          date
          type
          categories
          tags
          splash
          summary
          images
          markdown
          reportpdf {
            url
          }
          slidespdf {
            url
          }
          apps (sort: "date:desc", where: { publish: false }) {
            title
            slug
          }
          authors {
            title
            slug
          }
          datasets (sort: "date:desc", where: { publish: false }) {
            title
            slug
          }
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })
  },
  async getArticleInfo(id) {
    return await client
      .post('/graphql', {
        query: `{
        article (id: "${id}") {
          title
          slug
          date
          type
          categories
          tags
          splash
          summary
          authors {
            title
            slug
          }
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })
  },
  async getArticlesInfo() {
    return await client
      .post('/graphql', {
        query: `{
        articles (sort: "date:desc", where: { publish: false }) {
          title
          slug
          date
          type
          categories
          tags
          splash
          summary
          authors {
            title
            slug
          }
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })
  },
  async getArticlesCarouselInfo() {
    return await client
      .post('/graphql', {
        query: `{
        articles (sort: "date:desc", where: { publish: false }, limit: 5) {
          title,
          slug,
          splash
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })
  },

  // datsets
  async getDatasetBySlug(slug) {
    return await client
      .post('graphql', {
        query: `{
        datasets (where: { slug: "${slug}" }) {
          _id
          title
          slug
          date
          categories
          tags
          sources
          timeperiod
          agegroup
          unit
          variables
          description
          notes
          datafile {
            name
            url
          }
          datacsv,
          apps (sort: "date:desc", where: { publish: false }) {
            title
            slug
          }
          articles (sort: "date:desc", where: { publish: false }) {
            title
            slug
          }
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })
  },
  async getDatasetsInfo() {
    return await client
      .post('graphql', {
        query: `{
        datasets (sort: "date:desc", where: { publish: false }) {
          _id
          title
          slug
          date
          categories
          tags
          sources
          agegroup
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })
  }
}
