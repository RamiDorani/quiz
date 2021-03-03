const quizService = require('./quiz.service')
const logger = require('../../services/logger.service')

const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
  getQuestion,
  getQuestions,
}

async function getQuestion(req, res) {
  const question = await quizService.getById(req.params.id)
  res.send(question)
}




async function getQuestions(req, res) {
  //console.log('hiii',req.query);
  const questions = await quizService.query(req.query)
  logger.debug(questions);
  res.send(questions)
}

