let connection;
let chatBubble = "";

const handleUserInput = function(data) {
  if (data === '\x03') {
    process.exit()
  } else if (data.charCodeAt(0) === 13) {
    connection.write(`Say: ${chatBubble}`);
    chatBubble = "";
  }
  switch (data) {
    case "w":
      connection.write('Move: up');
      break;
    case "a":
      connection.write('Move: left');
      break;
    case "s":
      connection.write('Move: down');
      break;
    case "d":
      connection.write('Move: right');
      break;
    case "1":
      connection.write("Say: SUPER SPEED!!!")
    default:
      chatBubble += data;
      break;
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

module.exports = { setupInput }