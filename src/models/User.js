const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    subscription: {
        type: String, 
        enum: ['inicial', 'popular', 'premium'], 
        required: false,
    },
    accessibleIAs: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'IA' }
    ],
    createAT: {
        type: Date,
        default: Date.now(),
    },
})
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
userSchema.methods.checkPassword = async function (passwordInserted) {
    return await bcrypt.compare(passwordInserted, this.password);
}
module.exports = mongoose.model('User', userSchema);