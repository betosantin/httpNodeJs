var http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end("Hello world");
}).listen(8181);