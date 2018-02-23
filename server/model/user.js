/*
 * @Author: Chandan Kumar 
 * @Date: 2018-02-22 12:45:24 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-02-22 13:11:09
 */
var { mongoose } = require('./../db/mongoose');


const user = mongoose.model('User', {
    Email: {
        type: String,
        required: true,
        trim: true



    }




});



module.exports = {
    user: user,
}