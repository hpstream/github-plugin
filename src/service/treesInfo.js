const request = require("../utils/request");

exports.treesInfo = function getUser(url) {
  let tepUrl = `https://api.github.com/repos/${url}/git/trees/main?recursive=1`;
  return request({
    method: "get",
    url: tepUrl
  });
}