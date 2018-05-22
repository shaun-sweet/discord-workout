import { Client } from 'discord.js';
import replies from './replies';

const client = new Client();
const token = 'NDQ4NTMwMzY1OTcyMzQ4OTM4.DeXkRQ.a5SyllJuhqzrqGW3FLd_a5h_ZKI';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  const author = message.author.id;
  console.log(message);
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
  if (message.content.includes('.shame')) {
    message
      .react('🤔')
      .then(console.log)
      .catch(console.error);
    // message.channel.send(`I'm still figuring out how to shame you peasents...`);
    message.channel.send(replies(author));
  }
});

client.login(token);
client.channels;
