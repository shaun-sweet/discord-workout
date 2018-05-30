export class Command {
  constructor(
    /** The Command string identifier */
    cmd,
    /** Description of command for usage with the help command */
    desc,
    /** Function to execute */
    exec,
    /** list of dependencies */
    requireSheetsClient
  ) {
    this.cmd = cmd
    this.desc = desc
    this.exec = exec
    this.requireSheetsClient = requireSheetsClient
  }
}
