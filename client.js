const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  return conn;
}

module.exports = { connect };