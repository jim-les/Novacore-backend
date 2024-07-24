const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String },
    short_description: { type: String },
    long_description: { type: String },
    creator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    start_time: { type: Date },
    end_time: { type: Date },
    poster_url: { type: String },
    timer: { type: Number },
});

module.exports = mongoose.model('Event', EventSchema);
