const express = require('express');
const router = express.Router();
const {
  createBootcamp,
  getBootcamp,
  deleteBootcamps,
  getBootcamps,
  updateBootcamps,
} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamps)
  .delete(deleteBootcamps);
module.exports = router;
