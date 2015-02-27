var fs = require('fs');
var path = require('path');
files = [];
module.exports = function(dir, ext, callback){
fs.readdir(dir, function(err, list){
    if(err){
        return callback(err);
    }
    else {
    for(var i=0;i<list.length;i++){
        if(path.extname(list[i])==='.'+ext){
           // console.log(list[i]);
           files.push(list[i]);
        }
    }
       // return files;
    }
    callback(null, files);
});
};