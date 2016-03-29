'use strict';

function buildJSON(metadata, params) {
    var paramsArr;
    var result = {};
    if (params) {
        console.log('additional params detected');
        paramsArr = params.split(' ');
        paramsArr.forEach(function(param) {
            if (metadata[params]) {
                result[param] = metadata[param];
            }
        });
        console.log(result);
        return result;
    } else {
        return {
            size: metadata.size
        };
    }
    
}

module.exports = buildJSON;