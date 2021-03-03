const express = require('express')
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getQuestion,getQuestions } = require('./quiz.controller')
const router = express.Router()


router.get('/', getQuestions)
router.get('/:id', getQuestion)



module.exports = router