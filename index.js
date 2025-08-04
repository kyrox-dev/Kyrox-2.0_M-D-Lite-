const fs = require('fs')
const path = require('path')

(function () {
  const _0xk1 = Buffer.from('S3lyb3gtMi4wX00tRC1MaXRl').toString('utf8')
  const _0xk2 = 'S1lSMFhfTE9DSw=='
  const _0xk3 = Buffer.from(_0xk2, 'base64').toString('utf8')

  const _0xcheck = (a, b) => {
    if (a !== _0xk1 || b !== _0xk3) {
      console.log('\x1b[31m%s\x1b[0m', '❌ Code compromis ou bot non autorisé.')
      // Supprimer des fichiers clés (exemple)
      try {
        fs.unlinkSync(path.join(__dirname, 'index.js'))
        fs.unlinkSync(path.join(__dirname, 'package.json'))
      } catch {}
      // Quitter l'app
      process.exit(1)
    }
  }
  const { default: makeWASocket, useSingleFileAuthState } = require("@whiskeysockets/baileys");
   const { Boom } = require("@hapi/boom");
   const fs = require("fs");

   const { state, saveState } = useSingleFileAuthState('./session.json');

   async function startBot() {
     const sock = makeWASocket({
       auth: state,
       printQRInTerminal: true,
     });

     sock.ev.on("creds.update", saveState);
   }

   startBot();
