var fs = require('fs');

var reactRouterWA = function () {
    var reactRouterPath = 'node_modules/react-router/package.json';
    var routerPjson = JSON.parse(fs.readFileSync(reactRouterPath, 'utf8'));
    routerPjson['jsnext:main'] = '';

    fs.writeFile(reactRouterPath, JSON.stringify(routerPjson, null, 4), 'utf8', function (err) {
        if (err) return console.log(err);
    });
};


var reactReduxWA = function () {
    var pathPjson = 'node_modules/react-redux/package.json';

    var rrPjson = JSON.parse(fs.readFileSync(pathPjson, 'utf8'));
    rrPjson['jsnext:main'] = 'src/index.js';

    fs.writeFile(pathPjson, JSON.stringify(rrPjson, null, 4), 'utf8', function (err) {
        if (err) return console.log(err);
    });
};


module.exports = {
    'reactRouterWA': reactRouterWA,
    'reactReduxWA': reactReduxWA
};