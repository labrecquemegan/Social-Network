const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController')

// get/create thoughts
router.route('/').get(getThoughts).post(createThought)

// adds reactions
router.route('/:thoughtId/reactions').post(addReaction)

// deletes reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

// get/update/delete thoughts
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)

module.exports = router