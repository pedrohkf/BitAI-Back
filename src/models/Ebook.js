const mongoose = require('mongoose');

const EbookSchema = new mongoose.Schema({
    cape: { type: String, required: false },
    title: { type: String, required: false },
    authorName: { type: String, required: false },
    brandApresentation: { type: String, required: false },
    baseTheme: { type: String, required: false },
    introduction: { type: String, required: false },
    development: { type: String, required: false },
    fundamentalTheme: { type: String, required: false },
    conclusionTheme: { type: String, required: false },
    links: { type: [String], default: [] },
    contact: { type: String, required: false },
    createadAt: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }
});

module.exports = mongoose.model('Ebook', EbookSchema);
