import { Client } from 'discord.js';

import cmdParser from './cmdParser';

const client = new Client();
const token = 'NDQ4NTMwMzY1OTcyMzQ4OTM4.DeXkRQ.a5SyllJuhqzrqGW3FLd_a5h_ZKI';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Create an event listener for messages
client.on('message', message => {
  console.log(message);

  const command = message.content.split(' ');
  if (command[0] === '.shame') {
    const action = cmdParser(command);
    action(message);
  }
  // if (message.content === 'ping') {
  //   // Send "pong" to the same channel
  //   message.channel.send('pong');
  // }
  // if (message.content.includes('.shame')) {
  //   message
  //     .react('🤔')
  //     .then(console.log)
  //     .catch(console.error);
  //   // message.channel.send(`I'm still figuring out how to shame you peasents...`);
  //
  // }
});

client.login(token);
client.channels;
