import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const recordSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: Number, required: true },
  image: { type: String, required: true },
  dateAdded: { type: String, required: true },
})

recordSchema.plugin(mongooseUniqueValidator)

const Record = mongoose.model('Record', recordSchema)

export default Record
