import client from './client'

export default {
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
