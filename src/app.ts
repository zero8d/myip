import express from 'express'

const app = express()
app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  res.send(ip)
})

export default app
