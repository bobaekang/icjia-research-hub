import axios from 'axios'
import NProgress from 'nprogress'
import api from '@/config/api'

const client = axios.create({
  baseURL: api.BASE_URL
})

// axios({
//   method: 'post',
//   url: api.AUTH_URL,
//   data: {
//     identifier: api.IDENTIFIER,
//     password: api.PASSWORD
//   }
// }).then(res => {
//   const token = res.data.jwt
//   client.defaults.headers.common['Authorization'] = `Bearer ${token}`
// })

client.interceptors.request.use(config => {
  NProgress.start()
  return config
})

client.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export const appGetters = {
  async getSingle(slug) {
    const res = await client
      .post('/graphql', {
        query: `{
        apps (where: { slug: "${slug}" }) {
          title
          slug
          external
          date
          categories
          tags
          image
          contributors
          description
          url
          citation
          funding
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

    return res.data.data.apps[0]
  },
  async getList() {
    const res = await client
      .post('/graphql', {
        query: `{
        apps (sort: "date:desc", where: { status: "published" }) {
          title
          slug
          external
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

    return res.data.data.apps
  },
  async getListSearch() {
    const res = await client
      .post('/graphql', {
        query: `{
        apps (sort: "date:desc", where: { status: "published" }) {
          title
          slug
          external
          date
          categories
          tags
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })

    return res.data.data.apps
  }
}

export const articleGetters = {
  async getSingle(slug) {
    const res = await client
      .post('/graphql', {
        query: `{
        articles (where: { slug: "${slug}" }) {
          title
          slug
          external
          date
          type
          categories
          tags
          splash
          abstract
          images
          markdown
          citation
          doi
          funding
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

    return res.data.data.articles[0]
  },
  async getSingleCard(id) {
    const res = await client
      .post('/graphql', {
        query: `{
        article (id: "${id}") {
          title
          slug
          external
          date
          type
          categories
          tags
          thumbnail
          abstract
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

    return res.data.data.article
  },
  async getList() {
    const res = await client
      .post('/graphql', {
        query: `{
        articles (sort: "date:desc", where: { status: "published" }) {
          title
          slug
          date
          external
          type
          categories
          tags
          thumbnail
          abstract
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

    return res.data.data.articles
  },
  async getListCarousel() {
    const res = await client
      .post('/graphql', {
        query: `{
        articles (sort: "date:desc", where: { status: "published", external: false }, limit: 5) {
          title,
          slug,
          splash
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })

    return res.data.data.articles
  },
  async getListSearch() {
    const res = await client
      .post('/graphql', {
        query: `{
        articles (sort: "date:desc", where: { status: "published" }) {
          title
          slug
          external
          date
          categories
          tags
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })

    return res.data.data.articles
  }
}

export const authorGetters = {
  async getList() {
    const res = await client
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

    return res.data.data.authors
  }
}

export const datasetGetters = {
  async getData(id, csv) {
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

    const res = await client
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

    return res.data.data.dataset
  },
  async getSingle(slug) {
    const res = await client
      .post('graphql', {
        query: `{
        datasets (where: { slug: "${slug}" }) {
          _id
          title
          slug
          external
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
          citation
          funding
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

    return res.data.data.datasets[0]
  },
  async getList() {
    const res = await client
      .post('graphql', {
        query: `{
        datasets (sort: "date:desc", where: { status: "published" }) {
          _id
          title
          slug
          external
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

    return res.data.data.datasets
  },
  async getListSearch() {
    const res = await client
      .post('/graphql', {
        query: `{
        datasets (sort: "date:desc", where: { status: "published" }) {
          title
          slug
          external
          date
          categories
          tags
        }
      }`
      })
      .catch(err => {
        console.log(err)
      })

    return res.data.data.datasets
  }
}

export default client
