function getCommand(cmd) {
  this.cmd = cmd;
}

exports.getPWD = function(cmd) {
  process.stdout.write(process.env.PWD);
  process.stdout.write('\nprompt > ');
}

exports.getDate = function(cmd) {
  var date = new Date();
  process.stdout.write(date.toString());
  process.stdout.write('\nprompt > ');
}

exports.exitProcess = function(cmd) {
  process.exit();
}
