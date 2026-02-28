const path = require("path");

module.exports = {
    // Ponto de entrada do aplicativo
    entry: "./src/index.js",
    // Configuração de saída
    output: {
        // Caminho absoluto para o diretório de saída
        path: path.resolve(__dirname, "dist"),
        filename: bundle.js
    }
}