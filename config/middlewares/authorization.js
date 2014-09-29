<<<<<<< HEAD
var User = require('../../public/models/user');
=======
var User = require('../../app/models/user');
>>>>>>> a5a767a3005b008263eba550db54c1d775a20fff

exports.isAuthenticated = function (req, res, next){
    if(req.isAuthenticated()){
        next();
    }else{
        res.redirect("/login");
    }
}

exports.userExist = function(req, res, next) {
    User.count({
        email: req.body.email
    }, function (err, count) {
        if (count === 0) {
            next();
        } else {
            res.redirect("/signup");
        }
    });
}
