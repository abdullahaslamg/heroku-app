const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user model must have a name'],
        minlength: 5
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        validate: [validator.isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'please provide a password'],
        minlength: 5
    }
})


userSchema.methods.checkPassword = async function(userPassword, newPassword) {
    return await bcrypt.compare(userPassword, newPassword)
}
const User = mongoose.model('User', userSchema);

module.exports = User;