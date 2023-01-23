import express from 'express'
import mongoose from 'mongoose'
import { connectDb } from './db/helpers.js'
import { port } from './config/environment.js'
import router from './config/router.js'

const app = express()

app.use(express.json())
app.use('/api', router)

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
