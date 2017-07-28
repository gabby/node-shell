process.stdout.write('prompt >');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();

  if(cmd=='pwd') {
    process.stdout.write(process.env.PWD);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});

/*
process.stdin.on('data', function(data) {
  if(data=='pwd'){

  }
});
*/
