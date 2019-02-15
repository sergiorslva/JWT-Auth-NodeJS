require("dotenv-safe").load();
var jwt = require('jsonwebtoken');

module.exports = function (application) {

    application.post('/login', function(req, res, next){
        if(req.body.user === 'admin' && req.body.password === 'admin'){    
            const id = 1;
            var token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300
            });

            let payload = {
                token: token,
                pages: [
                {name: 'admin'},
                {name: 'order'},
                {name: 'quotation'},
                ]      
            }

            res.status(200).send({ auth: true, payload: payload });
        }  
        
        res.status(500).send('Login inválido!');        
    });    
}