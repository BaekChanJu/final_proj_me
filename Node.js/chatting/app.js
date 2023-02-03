const express = require("express")
const http = require("http")
const app = express();
const path = require("path")
const server = http.createServer(app);
const socketIO = require("socket.io");
const moment = require("moment");




const io = socketIO(server);

app.use(express.static(path.join(__dirname,"src")))



//스프링부트에서 파라미터받기 & chat.js로 던질 준비
app.get('/?:id', function (req, res) {
   var id = req.query.id;

   res.send("id : " + id);
   console.log(req.query)
});



const PORT = process.env.PORT || 5000;
io.on("connection",(socket)=>{
   
   
   
   socket.on("chattig",(data)=>{
      const {name, msg} = data;
        
        io.emit("chattig", {
         name,
         msg,
         //~시, ~분 오전/오후 설정 을 위한 moment 함수 사용
         time : moment(new Date()).format("HH:mm A")

        

        })
   })
})

server.listen(PORT, ()=>console.log(`server is running ${PORT}`))


