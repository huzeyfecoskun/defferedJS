const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "defferedjs.min.js",
        libraryTarget: 'var',
        library: 'DefferedJS'
    },
    devtool: "source-map"
}