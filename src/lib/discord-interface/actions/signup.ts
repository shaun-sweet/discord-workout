import { Message } from 'discord.js';
import replies from '../replies';

export default function signup(message: Message, apiClient) {
  const author = message.author.id;
  message.channel.send(replies(author));
}
