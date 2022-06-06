const {
  treesInfo
} = require("../service/treesInfo")

module.exports = async function (args) {
  let res = await treesInfo(args.url);
  let tree = res.data.tree;
  let types = ['warm', 'easy', 'medium', 'hard']
  // test-cases.ts
  let trees = tree.filter((row) => {
    return row.path.indexOf('test-cases.ts') > -1
  })
  let treeMap = {};
  trees.map(row => {
    types.find(type => {
      if (row.path.indexOf(`-${type}-`) > -1) {
        if (!treeMap[type]) treeMap[type] = [];
        row.type = type;
        treeMap[type].push(row);
        return true;
      }
      return false;
    })

  })
  // console.log(treeMap['warm'])
  // questions

}