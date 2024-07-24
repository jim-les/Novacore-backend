const mongoose = require('mongoose');

const EventWinnerSchema = new mongoose.Schema({
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rank: { type: Number, min: 1, max: 10 },
});

module.exports = mongoose.model('EventWinner', EventWinnerSchema);
