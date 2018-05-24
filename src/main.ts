import { bootStrapDiscordBot } from './lib/discord-interface';
const { google } = require('googleapis');
import { client, listMajors } from './lib/google-sheets-api';

const auth = client();
const sheets = google.sheets({ auth, version: 'v4' });
// just a test for now
listMajors(auth);
bootStrapDiscordBot(sheets);
