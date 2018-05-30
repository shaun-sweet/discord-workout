import * as types from './CmdTypes'
import { actions } from '../actions'
import { Command } from './command'
const { HELP, THIS_WEEK, SHOW_PARTICIPANTS } = types
export const COMMANDS = {
  [THIS_WEEK]: new Command(
    THIS_WEEK,
    'Shows the stats for the current week',
    actions[THIS_WEEK]
  ),

  [HELP]: new Command(
    HELP,
    `Lists the details about a specific command`,
    actions[HELP]
  ),
  [SHOW_PARTICIPANTS]: new Command(
    SHOW_PARTICIPANTS,
    'Lists the people currently participating',
    actions[SHOW_PARTICIPANTS],
    true
  )
}
