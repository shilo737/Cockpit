const readline = require('readline');
const { Server } = require('socket.io');
const http = require('http');

// Create a readline interface to read user input from the command line
const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create an HTTP server and set up Socket.IO with CORS options
const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: true,     // Allow requests from any origin
    methods: ['GET', 'POST'], // Allow specified HTTP methods
  },
});

// Start the HTTP server on port 3001
server.listen(3001);

// Create a function to get user input asynchronously
async function getInput(question) {
  return new Promise((resolve) => {
    // Use readline to ask the user a question and resolve the answer
    readline1.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// An asynchronous function that runs indefinitely to capture and process user input
(async () => {
  while (true) {
    // Prompt the user for altitude, HIS, ADI, and confirmation
    const altitude = parseInt(await getInput('ENTER ALTITUDE between 0 to 3000: '), 10);
    const HIS = parseInt(await getInput('ENTER HIS between 0 to 360: '), 10);
    const ADI = parseInt(await getInput('ENTER ADI 100 / -100 / 0:'), 10);    
    // Prompt for confirmation and convert the response to lowercase
    const question = (await getInput('Are you sure you want to send the data? (Y/N) ')).toLowerCase();

    // Check if the confirmation is not 'n' (case-insensitive)
    if (question === 'y') {
      // Emit a message with the entered data to connected clients using Socket.IO
      io.emit('receive_message', {
        altitude,
        HIS,
        ADI,
      });
      console.log('Message has been sent');
    }
  }
})();
