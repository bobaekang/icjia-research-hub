import axios from 'axios'
import NProgress from 'nprogress'
import api from '@/config/api'

const client = axios.create({
  baseURL: api.BASE_URL
})

axios({
  method: 'post',
  url: api.AUTH_URL,
  data: {
    identifier: api.IDENTIFIER,
    password: api.PASSWORD
  }
}).then(res => {
  const token = res.data.jwt
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`
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
  async getAppBySlug(slug) {
    return await client
      .post('/graphql', {
        query: `{
        apps (where: { slug: "${slug}" }) {
          title
          slug
          date
          categories
          tags
          image
          contributors
          description
          url
          articles (sort: "date:desc", where: { status: "published" }) {
            title
            slug
          }
          datasets (sort: "date:desc", where: { status: "published" }) {
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
  async getAppsInfo() {
    return await client
      .post('/graphql', {
        query: `{
        apps (sort: "date:desc", where: { status: "published" }) {
          title
          slug
          date
          categories
          tags
          image
          contributors
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
          articles (sort: "date:desc", where: { status: "published" }) {
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
          apps (sort: "date:desc", where: { status: "published" }) {
            title
            slug
          }
          authors {
            title
            slug
          }
          datasets (sort: "date:desc", where: { status: "published" }) {
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
        articles (sort: "date:desc", where: { status: "published" }) {
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
        articles (sort: "date:desc", where: { status: "published" }, limit: 5) {
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
  async getDataById(id, csv) {
    const data = csv
      ? `
      datacsv
      datafilename
      `
      : `
      datafile {
        name
        url
      }`

    return await client
      .post('graphql', {
        query: `{
          dataset (id: "${id}" ) {
            ${data}
          }
        }`
      })
      .catch(err => {
        console.log(err)
      })
  },
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
          datafilename
          apps (sort: "date:desc", where: { status: "published" }) {
            title
            slug
          }
          articles (sort: "date:desc", where: { status: "published" }) {
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
        datasets (sort: "date:desc", where: { status: "published" }) {
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
