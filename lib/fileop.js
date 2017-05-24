const fs  = require('fs');
const path = require('path');

let readFiles = (dir, filetypes) => {
    const cnNameReg = /[\u4E00-\u9FA5]/g;
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            // 获取匹配后缀名，并且名字中带有汉字的文件名
            resolve(files.filter((v) => filetypes.includes(path.parse(v).ext) && cnNameReg.test(v)));
        });
    });
};

let fileRename = (filepath, filename, enName) => {
    fs.rename(path.join(filepath,filename),path.join(filepath,enName));
}

module.exports = {
    readFiles: readFiles,
    fileRename: fileRename
}