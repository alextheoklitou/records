import Record from '../models/record.js'

async function recordIndex(_req, res, next) {
  try {
    const records = await Record.find()
    return res.status(200).json(records)
  } catch (err) {
    next(err)
  }
}

async function recordShow(req, res, next) {
  try {
    const record = await Record.findById(req.params.id)
    return res.status(200).json(record)
  } catch (err) {
    next(err)
  }
}

async function recordCreate(req, res, next) {
  try {
    const newRecord = await Record.create(req.body)
    return res.status(201).json(newRecord)
  } catch (err) {
    next(err)
  }
}

async function recordUpdate(req, res, next) {
  try {
    const recordToEdit = await Record.findById(req.params.id)
    Object.assign(recordToEdit, req.body)
    await recordToEdit.save()
    return res.status(202).json(recordToEdit)
  } catch (err) {
    next(err)
  }
}
``
async function recordDelete(req, res, next) {
  try {
    const recordToDelete = await Record.findById(req.params.id)
    await recordToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

export default {
  index: recordIndex,
  show: recordShow,
  create: recordCreate,
  update: recordUpdate,
  delete: recordDelete,
}
