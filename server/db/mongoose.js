/*
 * @Author: Chandan Kumar 
 * @Date: 2018-02-22 12:39:18 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-02-26 16:32:28
 */
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongoUser:MongoDB2018@ds233228.mlab.com:33228/mongo-crud-db');

module.exports = { mongoose };