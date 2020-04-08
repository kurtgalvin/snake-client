const net = require('net');
const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', function() {
    console.log('Connected');
    conn.write('Name: KG')
  })
  
  conn.on('data', function(data) {
    console.log(data);
  })

  return conn;
}

module.exports = { connect };