const fs = require('fs-extra')
const path = require('path')
module.exports = async function writeFileTree(dir, files) {
  Object.keys(files).forEach((name) => {
    const filePath = path.join(dir, name)
    fs.ensureDirSync(path.dirname(filePath)) // 判断目录存在不存在，不存在就创建
    fs.writeFileSync(filePath, files[name])
  })
}