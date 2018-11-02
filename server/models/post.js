const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true,'description is required']
    }
});

module.exports = mongoose.model('Post', postSchema);