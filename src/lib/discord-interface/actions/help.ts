import { Message } from 'discord.js';
import replies from '../replies';

export default function help(message: Message) {
  const author = message.author.id;
  const response = `Try the following: 
\`\`\`
.shame help
\`\`\`
  `;
  message.channel.send(response);
}
