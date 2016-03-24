# mini-pki

Putting together a tutorial on creating your own public key infrastructure for microservices

## Usage

## Generating certs

Make sure your `$DOCKER_HOST` is running locally (cert generation requires writing to a local volume carina can't reach).

```
./gencerts.sh
```

## Using the certs

You'll be running two processes, a server and a client. In one terminal:

```
source sourcery.sh
node raw-tcp/server.js
```

In another terminal:

```
source sourcery.sh
node raw-tcp/cli.js
```
