var fs = require('fs');
var leituraAsync = function(arquivo){
  console.log('fazendo leitura async');
  var inicio = new Date().getTime();
  fs.readFile(arquivo);
  var fim = new Date().getTime();
  console.log('Bloqueio async: '+(fim - inicio)+'ms');
};
module.exports = leituraAsync;
