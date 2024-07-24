const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    full_name: { type: String },
    email: { type: String, unique: true, required: true },
    github_link: { type: String },
    twitter_link: { type: String },
    skills: [{ type: String }],
    badges: [{ type: String }],
    events_participated: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
});

module.exports = mongoose.model('User', UserSchema);
