var getCommand = require('./command')

process.stdout.write('prompt >');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();

  if(cmd=='pwd') {
    getCommand.getPWD(cmd);
  } else if(cmd =='date'){
    getCommand.getDate(cmd);
  } else if(cmd == 'exit'){
    getCommand.exitProcess(cmd);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
