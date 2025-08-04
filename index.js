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

  _0xcheck(_0xk1, _0xk3)
})()
const { default: makeWASocket, useSingleFileAuthState } = require('@adiwajshing/baileys')
const express = require(express)

const app = express()
const PORT = process.env.PORT || 3000

const { state, saveState } = useSingleFileAuthState('./session.json')

let qr = null

async function startBot() {
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
  })

  sock.ev.on(connection.update, update => {
    if (update.qr) {
      qr = update.qr
    }
  })

  sock.ev.on(creds.update, saveState)

  app.get('/qr', (_, res) => {
  if (qr) {
    res.send('<img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qr)}" />')
  } else {
    res.send("QR code not available yet")
  }
})

  app.listen(PORT, () => console.log(Server running on port{PORT}))
}

startBot()

