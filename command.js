var fs = require('fs');
var chalk = require('chalk');

function getCommand(cmd) {
  this.cmd = cmd;
}

var getPWD = function() {
  process.stdout.write(process.env.PWD);
  process.stdout.write(chalk.yellow('\nprompt > '));
}

exports.getPWD = getPWD;

exports.getDate = function(cmd) {
  var date = new Date();
  process.stdout.write(date.toString());
  process.stdout.write(chalk.yellow('\nprompt > '));
}

exports.exitProcess = function(cmd) {
  process.exit();
}

exports.getLS = function(cmd) {
  var pwd = process.env.PWD;
  var out = fs.readdirSync(pwd.slice(2));
  for( var i=0; i<out.length; i++ ) {
    if(out[i][0]!=='.'){
      process.stdout.write(out[i]+'\n');
    }
  }
  process.stdout.write(chalk.yellow('\nprompt > '));
}

exports.getEcho = function(args){
  // var getStr = cmd.split(" ").slice(1).join(' ');
  if (args==='$PATH') {
    process.stdout.write(process.env.PATH);
  } else process.stdout.write(args);
  process.stdout.write(chalk.yellow('\nprompt > '));
}
