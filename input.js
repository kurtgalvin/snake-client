const handleUserInput = function(data) {
  if (data === '\x03') {
    process.exit()
  } else {
    console.log('here', data)
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

module.exports = { setupInput }