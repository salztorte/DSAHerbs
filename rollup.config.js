import fs from 'fs';

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import npm from 'rollup-plugin-npm';
import replace from 'rollup-plugin-replace';

let babelrc = JSON.parse(fs.readFileSync('.babelrc', 'utf8'));
babelrc.babelrc = false;

const config = {
    entry : 'src/index.js',
    dest : 'www/build/bundle.js',
    format : 'iife',
    sourceMap : true,
    plugins : [
        replace({
                    'process.env.NODE_ENV' : JSON.stringify('production')
                }),
        npm({jsnext : true, main : true}),
        commonjs({
                     include : ['node_modules/**'],
                     namedExports : {
                         'node_modules/react/react.js' : ['Component', 'Children', 'createElement', 'PropTypes'],
                         'node_modules/react-dom/index.js' : ['render'],
                         'node_modules/redux-devtools/lib/index.js' : ['createDevTools']
                     }
                 }),
        babel(babelrc)
    ]
};

export default config;