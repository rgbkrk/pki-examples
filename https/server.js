const https = require('https');

const options = {
  key: process.env.SERVER_KEY,
  cert: process.env.SERVER_CERT,
  ca: process.env.CA,
  requestCert: true,
  rejectUnauthorized: true,
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
});

server.listen(27001, () => {
  console.log('listening on 27001');
});
