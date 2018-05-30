import thisWeek from './thisWeek'
import help from './help'
import showParticipants from './showParticipants'
import * as types from '../cmds/CmdTypes'
export const actions = {
  [types.THIS_WEEK]: thisWeek,
  [types.HELP]: help,
  [types.SHOW_PARTICIPANTS]: showParticipants
}
