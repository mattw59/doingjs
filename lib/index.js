const fs = require('fs');

var logTime = function(entry) {

  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var filename = 'C:/users/m02341/Documents/Notes/' + month + '.' + day + '.' + year + '.Journal.md';

  fs.appendFile(filename, entry, function(err) {
    if(err)
      console.log(err);
  });
};

exports.logTime = logTime;
