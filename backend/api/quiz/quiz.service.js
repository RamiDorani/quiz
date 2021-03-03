const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
}

async function query(filterBy = {}) {
    //console.log(filterBy);
    const criteria = _buildCriteria(filterBy);
    //console.log(criteria);
    const collection = await dbService.getCollection('question')
    try {
        const quiz = await collection.find(criteria).toArray();
        return _sortQuiz(quiz.reverse(), filterBy.sortBy)

    } catch (err) {
        console.log('ERROR: cannot find quiz')
        throw err;
    }
}

function _sortQuiz(quiz, sortBy) {
    if (!sortBy) return quiz
    return quiz.sort((a, b) => {
        return a[sortBy] < b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0;
    })
}

async function getById(quizId) {
    const collection = await dbService.getCollection('question')
    try {
        const question = await collection.findOne({
            "_id": quizId
        })
        return question
    } catch (err) {
        console.log(`ERROR: while finding qustion ${quizId}`)
        throw err;
    }
}



function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.task) {
        criteria.task = new RegExp(filterBy.task, 'ig');
        //criteria.task = filterBy.task;
    }

    if (filterBy.importancy) {
        criteria.importancy = filterBy.importancy;
    }
    return criteria;
}