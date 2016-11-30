var os = require('os');

var Script = require("recime-script-engine");

exports.bot = function(req, res){
  var uid = req.params["uid"];

  var script = new Script();

  var body = req.body;

  var options = {
    homedir : process.env.HOME_DIR || __dirname,
    uid : uid,
    alchemyAPIKey : process.env.ALCHEMY_API_KEY,
    data : body
  };

  script.execute(options).then(function(result){
     res.json(result);
  }, function(err){
      res.json(err);
  });

};
