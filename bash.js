var getCommand = require('./command')
var fs = require('fs');
var chalk = require('chalk');

process.stdout.write(chalk.yellow('prompt >'));

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim().split(' ')[0];
  var args = data.toString().trim().split(' ').slice(1);

  switch (cmd) {
    case 'pwd':
      getCommand.getPWD(cmd);
      break;
    case 'date':
      getCommand.getDate(cmd);
      break;
    case 'exit':
      getCommand.exitProcess(cmd);
      break;
    case 'ls':
      getCommand.getLS(cmd);
      break;
    case 'echo':
      getCommand.getEcho(args.join(' '));
      break;
    case 'cat':
      getCommand.cat(args[0]);
      break;
    case 'head':
      getCommand.head(args[0]);
      break;
    default:
      process.stdout.write('You typed: ' + data);
      process.stdout.write(chalk.yellow('\nprompt > '));
  }

});
