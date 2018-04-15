const mongoose = require('mongoose');
// const Schema = mongoose.Schema; not used anymore
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);