#!/usr/bin/env node

// Example implementation of a client that connects with strict PKI to a server
// We setup a TLS connection with a specific CA and client key pair against the
// server locally, then pipe data from stdin.

const tls = require('tls');

const options = {
  host: '127.0.0.1',
  port: 27001,
  key: process.env.CLIENT_KEY,
  cert: process.env.CLIENT_CERT,
  ca: [process.env.CA],
};

const socket = tls.connect(options);

socket.on('secureConnect', () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});

socket.setEncoding('ascii');
socket.on('data', (data) => {
  console.log('response', data);
});

socket.on('end', () => {
  console.log('THE END');
});
