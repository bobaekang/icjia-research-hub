import client from './client'

export default {
  async getPDF(id, type) {
    const pdf = `
      ${type}pdf {
        name
        url
      }`

    const res = await client
      .post('graphql', {
        query: `{
          article (id: "${id}" ) {
            ${pdf}
          }
        }`
      })
      .catch(err => {
        console.log(err)
      })

    return res.data.data.article
  },
  async getSingle(slug) {
    const res = await client
      .post('/graphql', {
        query: `{
        articles (where: { slug: "${slug}" }) {
          _id
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
