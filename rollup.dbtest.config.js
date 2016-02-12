import fs from 'fs';

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import npm from 'rollup-plugin-npm';

let babelrc = JSON.parse(fs.readFileSync('.babelrc', 'utf8'));
babelrc.presets[babelrc.presets.indexOf('es2015')] = 'es2015-rollup';
babelrc.babelrc = false;

const config = {
    entry: 'src/database.js',
    dest: 'test/testDb/bundle.js',
    format: 'iife',
    moduleName: 'database',
    plugins: [
        npm({jsnext: true, main: true}),
        commonjs({
            include: ['node_modules/**']
        }),
        babel(babelrc)
    ]
};

export default config;