var server=require('./server/server.js');

console.log(server);

server.deploy(
    {
        port:8080,
        root:'./'
    }
);