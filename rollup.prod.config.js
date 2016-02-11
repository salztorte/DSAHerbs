import uglify from 'rollup-plugin-uglify';
import devConfig from './rollup.dev.config.js';

let prodConfig = devConfig;
prodConfig.plugins.push(uglify());
export default prodConfig;