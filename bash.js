var getCommand = require('./command')
var fs = require('fs');
var chalk = require('chalk');

process.stdout.write('prompt >');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();

  if(cmd=='pwd') {
    getCommand.getPWD(cmd);
  } else if(cmd =='date'){
    getCommand.getDate(cmd);
  } else if(cmd == 'exit'){
    getCommand.exitProcess(cmd);
  } else if(cmd == 'ls'){
    getCommand.getLS(cmd);
  } else if(cmd.split(' ')[0]==='echo'){
    var args = cmd.split(" ").slice(1);
    getCommand.getEcho(args.join(' '));
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write(chalk.yellow('\nprompt > '));
  }
});
