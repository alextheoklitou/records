import express from 'express'
import records from '../controllers/records.js'

const router = express.Router()

router.route('/records')
  .get(records.index)
  .post(records.create)

router.route('/records/:id')
  .get(records.show)
  .put(records.update)
  .delete(records.delete)

export default router