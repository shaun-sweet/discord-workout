import replies from '../replies'

export default function thisWeek(message, apiClient) {
  const author = message.author.id
  message.channel.send(replies(author))
}
