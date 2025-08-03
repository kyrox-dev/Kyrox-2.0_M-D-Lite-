
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
    res.send(<img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qr)}" />)
  } else {
    res.send(QR code not available yet)
  }
})

  app.listen(PORT, () => console.log(Server running on port{PORT}))
}

startBot()

