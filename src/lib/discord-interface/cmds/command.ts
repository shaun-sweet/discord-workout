import { Cmds } from './CmdTypes';
import { actions } from '../actions';
type FunctionType = (...args: any[]) => any;
type ActionsMap = { [commandName: string]: FunctionType };
// type ActionsUnion<A extends ActionsMap> = ReturnType<A[keyof A]>;
type Actions = typeof actions;
type ActionsUnion = Actions[keyof Actions];
type Input = typeof Cmds;

export class Command<T extends Cmds> {
  constructor(
    /** The Command string identifier */
    public cmd: T,
    /** Description of command for usage with the help command */
    public desc: string,
    /** Function to execute */
    public exec: Actions[T]
  ) {}
}

type lol = typeof Cmds[typeof Cmds.HELP];
