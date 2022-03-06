const User = require('./User');
const Thought = require('./Thoughts');

module.exports = {User, Thought};

const userController = {


    
// remover friend from friend list
removeFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId }}, { new: true})
    .then((dbUserData) => {
        if (!dbUserData) {
            return res.status(404).json({ message: 'No user with this id'})
        }
        res.json(dbUserData)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
}
}

module.exports = userControllers