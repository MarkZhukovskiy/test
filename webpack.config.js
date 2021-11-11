const path = require('path')
const three = require('three')
var THREE = require('three');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'budle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}