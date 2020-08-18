const WebSocket = require("ws");

const server = new WebSocket.Server({port:8080});

var sockList = [];

server.on("open", function(){
    console.log("服务器打开了");
});


server.on("close", function(){
    console.log("服务器关闭");
});

server.on("connection", function(socket){
    console.log("有链接进来");
    sockList.push(socket);

    // 服务器接收消息，然后群发
    socket.on("message", function(message){
        for(let i=0; i<sockList.length; i++){
            // if(sockList[i]!=socket){
                sockList[i].send(message);
            // }
        }
    });
});