
var exec = require('cordova/exec'),
    cordova = require('cordova');

function  successCallback (result) {
    alert("SUCCESS: \r\n"+result );
}

function errorCallback (error) {
    alert("ERROR: \r\n"+error );
}

var ExtractZipFilePlugin=function(){
};

ZipPlugin.prototype.extract = function(file, successCallback, errorCallback) 
{
    return cordova.exec(successCallback, errorCallback, "ZipPlugin", "extract", [file]);
};

module.exports = new ZipPlugin();
