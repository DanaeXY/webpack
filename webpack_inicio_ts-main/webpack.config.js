const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index.ts', 
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, // Extrae o CSS nun arquivo separado
                    'css-loader', // Procesa o CSS
                ],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader', // Procesa arquivos TypeScript
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: './javascript/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', // Arquivo de salida
        template: './src/index.html', // Plantilla HTML
      }),
      new HtmlWebpackPlugin({
        filename: '/views/app.html', // Arquivo de salida
        template: './src/views/app.html', // Plantilla HTML
      }),
      new HtmlWebpackPlugin({
        filename: '/views/no-user.html', // Arquivo de salida
        template: './src/views/no-user.html', // Plantilla HTML
      }),
        new MiniCssExtractPlugin({ filename: './css/styles.css' }), // Arquivo CSS final
    ],
};
