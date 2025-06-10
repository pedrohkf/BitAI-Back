const mongoose = require('mongoose');

const PrincipleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    quote: { type: String, required: true },
    description: { type: String, required: true },
    example: { type: String, required: true },
    exercise: { type: String, required: true }
});

const EbookSchema = new mongoose.Schema({
    cape: { type: String, required: true },
    title: { type: String, required: true },
    authorName: { type: String, required: true },
    brandApresentation: { type: String, required: true },
    baseTheme: { type: String, required: true },
    introductionTheme: { type: String, required: true },
    fundamentalTheme: { type: String, required: true },
    principlesTheme: { type: [PrincipleSchema], required: true },
    conclusionTheme: { type: String, required: true },
    links: { type: [String], default: [] },
    contact: { type: String, required: true },
    createadAt: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Ebook', EbookSchema);
