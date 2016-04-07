#!/usr/bin/env node

// Example implementation of a client that connects with strict PKI to a server
// We setup a TLS connection with a specific CA and client key pair against the
// server locally, then pipe data from stdin.

const https = require('https');

const options = {
  host: '104.130.22.185',
  port: 27001,
  key: process.env.CLIENT_KEY,
  cert: process.env.CLIENT_CERT,
  ca: process.env.CA,
  rejectUnauthorized: true,

  path: '/',
  agent: false,
};

https.get(options, (res) => {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
