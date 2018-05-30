const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')
// eslint-disable-next-line
const path = require('path');

// If modifying these scopes, delete credentials.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
const TOKEN_PATH = 'credentials.json'
const SHEET_ID = '1aG4AChm-5Zx-sBhewA7lA1wQ5TRvmV19ryH94DR9qtg'

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */

function authorize(credentials) {
  // eslint-disable-next-line
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  )

  try {
    // Check if we have previously stored a token.
    const token = fs.readFileSync(TOKEN_PATH, 'utf8')
    oAuth2Client.setCredentials(JSON.parse(token))
    return oAuth2Client
  } catch (err) {
    console.log(err)
    return getNewToken(oAuth2Client)
  }
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Enter the code from that page here: ', code => {
    rl.close()
    oAuth2Client.getToken(code, (error, token) => {
      if (error) console.error(error)
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
    })
  })
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
export function listMajors(auth) {
  const sheets = google.sheets({ auth, version: 'v4' })
  sheets.spreadsheets.values.get(
    {
      spreadsheetId: SHEET_ID,
      range: 'participants'
    },
    (err, { data }) => {
      if (err) return console.log('The API returned an error: ' + err)
      const rows = data.values
      if (rows.length) {
        console.log('Discord Info')
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map(row => {
          console.log(`${row[0]}, ${row[4]}`)
        })
      } else {
        console.log('No data found.')
      }
    }
  )
}

export function client() {
  try {
    const content = fs.readFileSync('client_secret.json', 'utf8')
    return authorize(JSON.parse(content))
  } catch (err) {
    console.log('Error loading client secret file:', err)
  }
}
