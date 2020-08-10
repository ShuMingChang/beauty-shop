const axios = require('axios')
const fs = require('fs')
const path = require('path')

// -- 從 Gitlab 上拿取最新的 tag 名稱當作 version
// Project smbf-fe-h5 id is "242"
// PRIVATE-TOKEN from Gitlab user access token, has expires time.
axios.get('http://gitlab.solartninc.com/api/v4/projects/242/repository/tags?sort_by=updated&sort=desc', {
  headers: { 'PRIVATE-TOKEN': 'ruyo9xYxxSfsPt3_Wj8K' }
}).then((res) => {
  const version = res.data[0] ? res.data[0].name : 'unknown'
  fs.writeFile(path.join(__dirname, '../config/version.env.js'), `module.exports = { VERSION: '${version}' }`, () => {})
})
