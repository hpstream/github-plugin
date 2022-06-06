const fs = require('fs-extra')
const path = require('path');
const userhome = require('user-home');


exports.Db = class Db {
  constructor(){
    this.dbPath = path.join(userhome, '.bbdb.json');

  }
  async readFile(){
    if (!fs.existsSync(this.dbPath)){
       await this.writeFile({});
    }
     var data = await fs.readFileSync(this.dbPath,'utf8');
     return JSON.parse(data)
  }
  async writeFile(data){
    fs.ensureDirSync(path.dirname(this.dbPath)) // 判断目录存在不存在，不存在就创建
    return await fs.writeFileSync(this.dbPath, JSON.stringify(data));
  }
  async setVal(key,value){
      var data = await this.readFile();
      data[key] = value;
      this.writeFile(data)
  }
  async getVal(key) {
      var data = await this.readFile();
      if(key){
        return data[key]
      }else{
        return data;
      }  
  }
}


