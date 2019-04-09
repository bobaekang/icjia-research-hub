const fse = require('fs-extra')

fse
  .ensureDir('./public/docs')
  .then(() => {
    fse.copy('./docs/.vuepress/dist/', './public/docs/')
  })
  .catch(err => {
    console.error(err)
  })
