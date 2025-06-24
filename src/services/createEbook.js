const Ebook = require("../models/Ebook");

const addEbook = async({introduction}) => {
    const ebook = new Ebook({
        introduction
    })

    await ebook.save();
    console.log("Ebook salvo no banco!")
}

module.exports = {
    addEbook
}