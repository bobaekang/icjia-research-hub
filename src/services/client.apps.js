import client from './client'

export default {
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
