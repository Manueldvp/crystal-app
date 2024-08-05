var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 3000;
var cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
  originWhitelist: [], // Permite todos los orígenes
  requireHeader: [], // No requiere ningún encabezado adicional
  removeHeaders: [] // No elimina ningún encabezado
}).listen(port, host, function() {
  console.log('CORS Anywhere se está ejecutando en ' + host + ':' + port);
});