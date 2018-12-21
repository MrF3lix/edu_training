const express = require('express')
const router = express.Router()
const assignmentService = require('./assignments.service')

const getAll = (req, res, next) => {
    assignmentService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err))
} 

const getById = (req, res, next) => {
    assignmentService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err))
}

router.get('/', getAll)
router.get('/:id', getById)

module.exports = router