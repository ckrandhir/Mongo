/*
 * @Author: Chandan Kumar 
 * @Date: 2018-02-22 13:06:58 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-02-22 13:09:18
 */
var { mongoose } = require('./../db/mongoose');

const todo = mongoose.model('Chandan', {
    text: {
        type: String,

    },
    complete: {
        type: Boolean,
        required: true

    }
});

module.exports = {
    todo: todo,
}