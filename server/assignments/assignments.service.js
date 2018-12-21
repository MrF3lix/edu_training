const db = require('../helpers/db.js')
const Assignment = db.Assignment

const getAll = async() => {
    return await Assignment.find().select()
}

const getById = async (id) => {
    return await Assignment.findById(id).select('-hash')
}

module.exports = {
    getAll,
    getById
}