
var exec = require('cordova/exec'),
    cordova = require('cordova');

/*
function  successCallback (result) {
    console.log("SUCCESS: \r\n"+result );
}

function errorCallback (error) {
    console.log("ERROR: \r\n"+error );
}
*/

var ZipPlugin=function(){
};

ZipPlugin.prototype.extract = function(file, successCallback, errorCallback) 
{
    return cordova.exec(successCallback, errorCallback, "ZipPlugin", "extract", [file]);
};

module.exports = new ZipPlugin();
