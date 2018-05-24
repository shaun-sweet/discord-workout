import { Message } from 'discord.js';
import { COMMANDS } from './COMMANDS';
import { Cmds } from './CmdTypes';

export function parser(command: string[]) {
  let action = COMMANDS[Cmds.HELP];
  if (command[1]) {
    action = COMMANDS[command[1].toUpperCase()] || COMMANDS[Cmds.HELP];
  }
  console.log(action);
  return action;
}
