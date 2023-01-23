import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'


export function connectDb() {
  return mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
