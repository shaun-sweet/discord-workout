import { Client } from 'discord.js'
import { parser } from './cmds'

export function bootStrapDiscordBot(sheetsClient) {
  const client = new Client()
  const token = 'NDQ4NTMwMzY1OTcyMzQ4OTM4.DeXkRQ.a5SyllJuhqzrqGW3FLd_a5h_ZKI'
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })

  // Create an event listener for messages
  client.on('message', message => {
    const command = message.content.split(' ')
    console.log(command)
    if (command[0] === '.shame') {
      const action = parser(command)
      if (action.requireSheetsClient) {
        action.exec(message, sheetsClient)
      } else {
        action.exec(message)
      }
    }
  })

  client.login(token)
  // eslint-disable-next-line
  client.channels;
}
