import { Cmds } from './CmdTypes';
import { actions } from '../actions';
import { Command } from './command';
const { HELP, THISWEEK } = Cmds;
export const COMMANDS = {
  [THISWEEK]: new Command<Cmds.THISWEEK>(
    THISWEEK,
    'Shows the stats for the current week',
    actions[THISWEEK]
  ),

  [HELP]: new Command<Cmds.HELP>(
    HELP,
    `Lists the details about a specific command`,
    actions[HELP]
  )
};
