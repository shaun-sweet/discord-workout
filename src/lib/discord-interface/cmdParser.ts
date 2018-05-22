import { Message } from 'discord.js';
import { Commands } from './cmds';
import actions from './actions';

export default function parser(command: string[]) {
  const action = Commands[command[1].toUpperCase()] || Commands.HELP;
  console.log(action);
  return actions[action];
}
