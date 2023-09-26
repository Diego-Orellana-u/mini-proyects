const http = require("http");
const fs = require("fs");
const url = require("url")
const querystring = require("querystring")

const server = http.createServer((req,res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    let readWrite = (file,contentType) => {
        fs.readFile(file, function(err, data) { 
          res.writeHead(200, {'Content-Type': contentType}); 
          res.write(data); 
          res.end(); 
        });
    }
    
    switch (page){
        case "/":
            readWrite("index.html","text/html")
            break;
    
        case "/css/style.css":
            fs.readFile('css/style.css', function(err, data) {
                res.write(data);
                res.end();
        });
        break;
        
        case "/js/main.js":
        readWrite("js/main.js","text/javascript")
        break;

        case "/img/funnydog3.png":
            fs.readFile('img/funnydog3.png', function(err, data) {
                res.write(data);
                res.end();
        });
        break;
    
        case "/api":
            if('student' in params){
                let personName = "unknown"
                let personOccupation = "unknown"
                let personStatus = "unknown"
    
            if(params['student']== 'leon'){
                personName = "leon"
                personOccupation = "Boss man"
                personStatus = "Baller"
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            const objToJson = {
                name: personName,
                status: personStatus,
                currentOccupation: personOccupation
            }
            res.end(JSON.stringify(objToJson));
          }
          break;
        
        default:
            return
    }
})
server.listen(8000);
