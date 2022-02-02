module.exports.profile = function(req, res){
    return res.end('<h1>Profile</h1>');
}
module.exports.logout = function(req, res){
    return res.end('<h1>Logging out</h1>');
}