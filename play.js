const { connect } = require('./client');
console.log('Connecting ...');
const conn = connect();

conn.on('connect', function() {
  console.log('Connected');
  conn.write('Name: KG')
})

conn.on('data', function(data) {
  console.log(data);
})

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

setupInput()