var fs = require('fs');
var pathPjson = 'node_modules/react-redux/package.json';

var rrPjson = JSON.parse(fs.readFileSync(pathPjson, 'utf8'));
rrPjson['jsnext:main']= 'src/index.js';

fs.writeFile(pathPjson, JSON.stringify(rrPjson, null, 4), 'utf8', function (err) {
    if (err) return console.log(err);
});