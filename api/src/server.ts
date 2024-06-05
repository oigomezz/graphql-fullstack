import express from 'express'
import path from 'path'
import cors from 'cors'
import { urlencoded } from 'body-parser'

import { favicon } from './favicon'

export const app = express()

app.get('/favicon.ico', favicon)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'))
})

// Middlewares
app.use(cors())
app.use('/static', express.static(path.join(__dirname, '../public')))
app.use(urlencoded({ extended: false }))

export default app
