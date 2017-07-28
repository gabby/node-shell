function getCommand(cmd) {
  if(cmd=='pwd') {
    process.stdout.write(process.env.PWD);
    process.stdout.write('\nprompt > ');
  } else if(cmd =='date'){
    var date = new Date();
    process.stdout.write(date.toString());
    process.stdout.write('\nprompt > ');
  } else if(cmd == 'exit'){
    process.exit();
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
}

module.exports = {
  pwd : function() {
    
  }
}
