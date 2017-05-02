'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'what> '
});

rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'arduino':
      console.log('Arduino Slovakia!');
      break;
    case 'zero':
      console.log('Arduino Zero!');
      break;
    case 'bye':
      console.log('Bye!');
      process.exit(0);
      break;
    default:
      console.log(`Nerozumiem poziadavke '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Bye!');
  process.exit(0);
});