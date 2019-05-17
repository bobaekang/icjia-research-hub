import client from './client'

export default {
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
