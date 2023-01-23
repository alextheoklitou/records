import express from 'express'
import Record from './models/record.js'
import mongoose from 'mongoose'
import { connectDb } from './db/helpers.js'

const app = express()
const port = 4000

app.use(express.json())

app.use('/', (req, _res, next) => {
  console.log(`🤖 Incoming Request: ${req.method} to ${req.url}`)
  next()
})

app.get('/record', async (_req, res) => {
  const records = await Record.find()
  return res.status(200).json(records)
})

app.post('/record', async (req, res) => {
  try {
    const createdRecord = await Record.create(req.body)
    return res.status(201).json(createdRecord)
  } catch (err) {
    return res.status(422).json(err)
  }
})

app.get('/record/:recordId', async (req, res) => {
  const { recordId } = req.params
  try {
    const recordToFind = await Record.findById(recordId)
    if (!recordToFind) throw new Error()
    return res.status(200).json(recordToFind)
  } catch (err) {
    return res.status(404).json({ message: 'Not Found' })
  }
})

mongoose.set('strictQuery', false)

async function startServer() {
  try {
    await connectDb()
    console.log('🤖 Mongoose is connected')
    app.listen(port, () => console.log(`🤖 Listening on Port: ${port}`))
  } catch (err) {
    console.log('🤖 Oh no something went wrong')
    console.log(err)
  }
}

startServer()
