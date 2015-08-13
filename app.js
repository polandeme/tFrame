var fs = require('fs');

var args = process.argv.splice(2);
var opt = args[0];
var nameArr = args[1];
var type = 'default';
var name = 'test';
var nameObj = {
    type: 'default',
    name: 'test'
};

var getTypeName = function(name) {
    var name = name.split('-');
    var type = name[0];
    name.shift();
    name = name.join();
    return {
        name: name,
        type: type
    }
};
nameObj = getTypeName(nameArr);
//创建文件夹 app/nameObj.name
var filePath = 'app/' + nameObj.name; 

fs.exists(filePath, function(ex) {
    if(!ex) {
        fs.mkdir(filePath, function(err) {
            console.log('success create folder');
        });
    } else {
       console.log('dir is already exit');
    }
   return;
});

console.log(nameObj.type);
