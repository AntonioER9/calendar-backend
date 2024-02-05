const {Schema, model} = require('mongoose');
//Crear colección en BD Mongo.
const EventSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

EventSchema.method('toJSON', function() {
    const {__v, _id, ...objetc } = this.toObject();
    objetc.id = _id;
    return objetc;
});

module.exports = model('Event', EventSchema);