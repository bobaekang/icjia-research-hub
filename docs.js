const fse = require('fs-extra')

fse
  .emptydir('./public/docs')
  .then(() => {
    fse.copy('./docs/.vuepress/dist/', './public/docs/')
  })
  .catch(err => {
    console.error(err)
  })
