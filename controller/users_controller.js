module.exports.profile = function(req, res){
    return res.render('user', {
        title: "Codeial | Profile"
    });
}
module.exports.logout = function(req, res){
    return res.end('<h1>Logging out</h1>');
}