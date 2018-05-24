import { Message } from 'discord.js';
import replies from '../replies';

export default function thisWeek(message: Message, apiClient) {
  const author = message.author.id;
  message.channel.send(replies(author));
}
