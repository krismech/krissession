var httpVariable =  require('http')

//const ngrok = require('ngrok');
var myServer= httpVariable.createServer(doItNow).listen(8888)


function doItNow(req, res){
  res.writeHead(200, {'Content-Type' :'text/html'})
  res.write("Hello from node server!!  Acha Ji!! Have a good day")
  res.write(req.url)
  res.end()

}

/*myServer.listen(8888)

(async function() {
    const url = await ngrok.connect();
  })();*/