const urlfiy = require('./lib/enurl.js');
const fileop = require('./lib/fileop.js');

const mdDir = __dirname + '/'; // 文件目录
const fileTypes = ['.md'];  // 文件类型
const notEnUrl = /[^A-Za-z-]/g;


fileop.readFiles(mdDir, fileTypes).then(names => {
    names.forEach((name) => {
        urlfiy.getUrlName(name.split('.')[0])
          .then(trans => trans.replace(notEnUrl,''))  // 去除非英文及-字符
          .then(trans => fileop.fileRename(mdDir, name, trans+'.md'))
    });
})
