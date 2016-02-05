import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import npm from 'rollup-plugin-npm';
import replace from 'rollup-plugin-replace';


export default {
    entry : 'src/index.js',
    format : 'iife',
    plugins : [
        replace({
                    'process.env.NODE_ENV' : JSON.stringify('production')
                }),
        npm({jsnext : true, main : true}),
        commonjs({
                     include : 'node_modules/**',
                     namedExports : {
                         'node_modules/react-dom/index.js' : ['render']
                     }
                 }),
        babel({
                  exclude: 'node_modules/**'
              })
    ],
    dest : 'www/build/bundle.js'
};