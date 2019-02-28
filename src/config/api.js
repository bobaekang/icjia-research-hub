const env = process.env
let api

if (env.NODE_ENV === 'development') {
  api = {
    BASE_URL: env.VUE_APP_API_BASE_URL,
    AUTH_URL: env.VUE_APP_API_BASE_URL + '/auth/local',
    IDENTIFIER: env.VUE_APP_API_IDENTIFIER,
    PASSWORD: env.VUE_APP_API_PASSWORD
  }
} else if (env.NODE_ENV === 'production') {
  const fs = require('fs')
  const getSecretVal = secret => {
    return fs.readFileSync(`/run/secrets/${secret}`, 'utf8').trim()
  }

  api = {
    BASE_URL: getSecretVal(env.API_BASE_URL),
    AUTH_URL: getSecretVal(env.API_BASE_URL) + '/auth/local',
    IDENTIFIER: getSecretVal(env.API_IDENTIFIER),
    PASSWORD: getSecretVal(env.API_PASSWORD)
  }
}

export default api
