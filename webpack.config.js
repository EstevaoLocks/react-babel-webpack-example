const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Ponto de entrada do aplicativo
    entry: "./src/index.js",
    // Configuração de saída
    output: {
        // Caminho absoluto para o diretório de saída
        path: path.resolve(__dirname, "dist"),
        filename: bundle.js
    }
    // Configuração do módulo
    module: {
        rules: [
            {
                // Regra para arquivos JavaScript (tanto .js quanto .jsx)
                test: /\.(js|jsx)$/,
                // Exluir arquivos no diretório 'node_modules'
                exclude: /node_modules/,
                // Usar o loader 'babel-loader' para transpilar os arquivos
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    // Lista de plugins do webpack
    plugins: [
        // Plugin para gerar automaticamente o arquivo HTML
        new HtmlWebpackPlugin({
            // Template HTML para ser usado 
            template: "./public/index.html"
        })
    ],
    // Configuração da resolução de módulos
    resolve: {
        // Extensões de arquivos a serem resolvidas automaticamente
        extensions:[".js", ".jsx"]
    }
    // Configurações do servidor de desenvolvimento
    devServer: {
        // Configuração de arquivos estáticos a serem servidos
        static: {
            // Diretório a ser servido
            directory: path.join(__dirname, "dist")
        },
        // Porta do servidor de desenvolvimento
        port: 3000,
    }
};