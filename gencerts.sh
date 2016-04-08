#!/bin/bash

mkdir -p certificates

touch certificates/password
chmod 600 certificates/password
cat /dev/random | head -c 128 | base64 > certificates/password

rm -f certificates/*.srl certificates/*.csr certificates/*.pem

export KEYMASTER="docker run --rm -v $(pwd)/certificates/:/certificates/ cloudpipe/keymaster"

${KEYMASTER} ca
${KEYMASTER} signed-keypair -n server -h 127.0.0.1 -s "IP:127.0.0.1,IP:104.130.0.107" -p server
${KEYMASTER} signed-keypair -n client -h 127.0.0.1 -s IP:127.0.0.1 -p client
