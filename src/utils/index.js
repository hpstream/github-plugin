
const { DBKEY } = require('../config');
const {Db} = require('./db')
const log = require('./log')
var db = new Db();
exports.db = db

exports.isLogin = async function (isShowlog,msg) {
  var data = await db.getVal(DBKEY)
  if (isShowlog && !data) {
    log.danger(msg ||'登录过期,请重新登录～～')
  }
  return data;
}

exports.extractKeys = function extractKeys(data, keys,cb) {
  return data.map(element => {
    var map = {};
    keys.forEach(key => {
      map[key] = element[key];
    })
    cb&&cb(map);
    return map
  });
}

