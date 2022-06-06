const axios = require('axios')


module.exports = async function request(params) {

  var params = Object.assign({}, params)

  return axios(params);
}