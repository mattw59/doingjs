const fs = require('fs');

var logTime = function(entry) {

  fs.appendFile('time.txt', entry, function(err) {
    console.log(err);
  });
};

exports.logTime = logTime;
