// Importa o módulo do HTTP
const http = require('http');

// Cria um servidor e atribui uma callback de processamento da requisição
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Retorno OK
  res.setHeader('Content-Type', 'application/json'); 
  res.end('{"nome": "Jefferson Silva dos Santos", "cidade" : "Belo Horizonte"}');
});

// Define parâmetros (hostname e porta) e inicia o servidor
const hostname = '0.0.0.0';
const port = process.env.PORT || 30000;
server.listen(port, hostname, () => {
  console.log(` Servidor rodando http://${hostname}:${port}/`);
});

