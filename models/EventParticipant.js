const mongoose = require('mongoose');

const EventParticipantSchema = new mongoose.Schema({
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    joined_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EventParticipant', EventParticipantSchema);
