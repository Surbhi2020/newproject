const server = require("./api");
const port=process.env.PORT||3000;
server.listen(port, function() {
  console.log("Server is Listening at Port 3000");
});
