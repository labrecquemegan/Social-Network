const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // match: look up regex for email address
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    },

)

const User = model('User', userSchema);