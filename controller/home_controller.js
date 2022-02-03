module.exports.home = function(req, res){
    return res.render('home', {
        title: "Codeial | Home"
    }
    );}
module.exports.signup = function(req, res){
    return res.end('<h1>signing up</h1>');
}