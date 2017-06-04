var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users = [];
connections = [];

server.listen(process.env.PORT || 3000,function(){
      console.log('Running in port 3000..');
});
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
io.socket.on("connection",function(socket){
      connection.push(socket);
      console.log('terhubung ke : %s socket connected',connections.length);

      //disconected
      connections.splice(connections.indexOf(socket),1);
      console.log('Putus sambungan ke: %s socket connected',connections.lenght);
});
