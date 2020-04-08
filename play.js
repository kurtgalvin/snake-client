const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', function(data) {
    console.log(data)
  })

  return conn;
}

// console.log('Connecting ...');
// connect();
// console.log('Successfully Connecting');

module.exports = { connect };