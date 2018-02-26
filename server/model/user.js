/*
 * @Author: Chandan Kumar 
 * @Date: 2018-02-22 12:45:24 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-02-26 14:58:26
 */
var { mongoose } = require('./../db/mongoose');


const user = mongoose.model('User', {
    Email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email'
        }



    },

    password: {

        type: String,
        required: true,
        minlength: 6
    },
    token: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]






});



module.exports = {
    user: user,
}