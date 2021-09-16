const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
]

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "bundle.js",
    },
    mode: 'development',
    plugins,

};