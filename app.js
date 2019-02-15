// var express = require('express');
// var app = express();
// require("dotenv-safe").load();
// var jwt = require('jsonwebtoken');

// //uses
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.post('/login', (req, res, next) => {
//   if(req.body.user === 'admin' && req.body.password === 'admin'){    
//     const id = 1;
//     var token = jwt.sign({ id }, process.env.SECRET, {
//       expiresIn: 300
//     });

//     let payload = {
//       token: token,
//       pages: [
//         {name: 'admin'},
//         {name: 'order'},
//         {name: 'quotation'},
//       ]      
//     }

//     res.status(200).send({ auth: true, payload: payload });
//   }  
//   res.status(500).send('Login inválido!');
// })

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.get('/users', verifyJWT, (req, res, next) => {
//   let users = [
//     {id: 1, name: "User One"},
//     {id: 2, name: "User Two"},
//     {id: 3, name: "User Three"},
//     {id: 4, name: "User Four"},
//     {id: 5, name: "User Five"}
  
//   ]
//   res.send(users);  
// })

// function verifyJWT(req, res, next){
//   var token = req.headers['x-access-token'];
//   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
//   jwt.verify(token, process.env.SECRET, function(err, decoded) {
//     if (err) 
//       return 
    
//       res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
//     req.userId = decoded.id;
//     next();
//   });
// }

var app = require('./config/server');

app.listen(3000, function(){
	console.log('Servidor ON');	
});