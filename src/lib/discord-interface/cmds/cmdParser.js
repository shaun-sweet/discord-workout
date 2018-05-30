import { COMMANDS } from './COMMANDS'
import * as types from './CmdTypes'

export function parser(command) {
  let action = COMMANDS[types.HELP]
  if (command[1]) {
    action = COMMANDS[command[1].toUpperCase()] || COMMANDS[types.HELP]
  }
  console.log(action)
  return action
}
