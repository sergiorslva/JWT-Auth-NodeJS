require("dotenv-safe").load();
var auth = require('../services/authService.js');

module.exports = function (application) { 
    application.get('/api/user', auth.auth, function (req, res) {
        let users = [
            { id: 1, name: "User One" },
            { id: 2, name: "User Two" },
            { id: 3, name: "User Three" },
            { id: 4, name: "User Four" },
            { id: 5, name: "User Five" }
        ]
        res.send(users);
    });

    application.get('/api/user/:id', function (req, res) {
        let users = [
            { id: 1, name: "User One" }
        ]
        res.send(users);
    });
}    

