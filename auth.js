const express = require('express')
const router = express.Router()
const User = require('./User') 

// create a user, using async await because db is always ready to read and write.
// first wait and get all the data, then user.save()
// await User.create(req.body), directly User(req.body) will not check for the type of field, it will only check for the fields

const createUser = async(req, res) => {
    try {
        const user = await User.create(req.body)
        user.save()
        res.json({user}).status(201)
    } catch (error) {
        res.json({msg: error}).status(500)
    }
}

router.route('/').post(createUser)

module.exports = router