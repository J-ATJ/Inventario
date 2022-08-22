const fs = require("fs");

class Reader {

  static readJsonFile(path) {
    const rawdata = fs.readFileSync(path);
    const data = JSON.parse(rawdata);
    return data;
  }

}

module.exports = Reader;