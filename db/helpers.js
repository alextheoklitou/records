import mongoose from 'mongoose'

const dbURI = 'mongodb://localhost/record-db'

export function connectDb() {
  return mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
