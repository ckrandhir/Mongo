/*
 * @Author: Chandan Kumar 
 * @Date: 2018-02-22 12:39:18 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-02-22 13:06:04
 */
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };