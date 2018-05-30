export default function help(message) {
  // const author = message.author.id
  const response = `Try the following: 
\`\`\`
.shame help
\`\`\`
  `
  message.channel.send(response)
}
