const readline = require('readline');

const user = 'Dave';
const mode = 'public';
const prefix = '.';
const version = '1.0.0';
const plugins = 304;
const dev = 'Kyrox-Dev👺';

const menu = `
╭──────────── Kyrox-2.0_M-D Bot Menu ────────────╮
│ 1. 📜 Show main menu                          │
│ 2. 🔍 Bot info                                │
│ 3. 🗞️ Latest news                             │
│ 4. 👤 Contact owner                           │
╰──────────────────────────────────────────────╯
`;

console.log(menu);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Choose an option (1-4): ', (answer) => {
  switch(answer) {
    case '1':
      console.log(`
📜 Main Menu
━━━━━━━━━━━━━━━━━━━

╭─ 🧰 MISC
│ .ANTIDELETE
│ .AUDIO
│ .BOT
│ .COUPLEPP
│ .GETIMAGE
│ .OWNER
│ .STICKERSEARCH
│ .UPDATE
│ .VV3
│ .WEB
╰────────────

╭─ ⚙️ SETTINGS
│ .ALWAYS-ONLINE
│ .ANTI-BAD
│ .ANTICALL
│ .ANTIPROMOTE
│ .AUTO-REACT
│ .AUTO-RECORDING
│ .AUTO-REPLY
│ .AUTO-SEEN
│ .AUTO-STICKER
│ .AUTO-TYPING
│ .AUTO-VOICE
│ .MENTION-REPLY
│ .MODE
│ .READ-MESSAGE
│ .SETPREFIX
│ .STATUS-REACT
╰────────────

╭─ 🎨 TEXT EFFECTS
│ .BLACKPINK
│ .BOOM
│ .BULB
│ .CASTLE
│ .CAT
│ .CLOUDS
│ .DEADPOOL
│ .DEVILWINGS
│ .DRAGONBALL
│ .ERASER
│ .FROZEN
│ .FUTURISTIC
│ .GALAXY
│ .HACKER
│ .LEAF
│ .LUXURY
│ .NARUTO
│ .NEONLIGHT
│ .NIGERIA
│ .PAINT
│ .PHLOGO
│ .PORNHUB
│ .SADGIRL
│ .SANS
│ .SUNSET
│ .TATOO
│ .THOR
│ .TYPOGRAPHY
│ .VALORANT
│ .ZODIAC
╰────────────

╭─ 🎭 FUN
│ .ANIMEGIRL
│ .ANIMEGIRL1
│ .ANIMEGIRL2
│ .ANIMEGIRL3
│ .ANIMEGIRL4
│ .ANIMEGIRL5
│ .ANIME3
│ .ANIME4
│ .ANIME5
│ .SREPO
│ .SS
│ .WEATHER
╰────────────

╭─ 🧾 MENU
│ .ADULT
│ .AIMENU
│ .ANIMEMENU
│ .CONVERTMENU
│ .DLMENU
│ .FUNMENU
│ .GITHUBSTALK
│ .GROUPMENU
│ .HELP
│ .LIST
│ .LOGO
│ .MAINMENU
│ .MENU
│ .MENU2
│ .MENU3
│ .OTHERMENU
│ .OWNERMENU
│ .REACTIONS
╰────────────
      `);
      break;

    case '2':
      console.log(`
🔍 Bot Info
━━━━━━━━━━━━━━━━━━━
* USER     : @user
* MODE     :{mode}
* PREFIX   : prefix
* VERSION  :{version}
* PLUGINS  : plugins
* DEV      :{dev}
      `);
      break;

    case '3':
      console.log(`
🗞️ Latest news
──────────────
• No news available yet.
      `);
      break;

    case '4':
      console.log(`
👤 Contact owner
────────────────
Phone: +50935420142
      `);
      break;

    default:
      console.log("Invalid option. Please choose between 1 and 4.");
  }

  rl.close();
});
