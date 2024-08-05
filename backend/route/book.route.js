const express = require('express');
const { getBook } = require('../controller/book.controller');

const router = express.Router();

router.get('/getbook', getBook);

module.exports = router;
