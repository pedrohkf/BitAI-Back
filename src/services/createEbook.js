const Ebook = require("../models/Ebook");

const addEbook = async ({ introduction, development }) => {
    const ebook = new Ebook({
        introduction,
        development
    })

    await ebook.save();
    console.log("Ebook salvo no banco!")
}

module.exports = {
    addEbook
}