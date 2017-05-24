const fetch = require('node-fetch');

function getUrlName(sentence){
    let transUrl = encodeURI(`http://fanyi.youdao.com/openapi.do?keyfrom=FileEnfiy&key=663493265&type=data&doctype=json&version=1.1&q=${sentence.trim()}`);

    return fetch(transUrl)
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(trans => trans.translation[0].trim().toLowerCase().replace(/\s+/g, "-"))
}

module.exports = {
    getUrlName: getUrlName
}
