const tls = require('tls');

const options = {
  key: process.env.SERVER_KEY,
  cert: process.env.SERVER_CERT,
  ca: process.env.CA,
  requestCert: true,
  rejectUnauthorized: true,
};

const server = tls.createServer(options, (socket) => {
  console.log(socket);
  console.log('server connected',
            socket.authorized ? 'authorized' : 'unauthorized');
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(27001, () => {
  console.log('listening on 27001');
});
