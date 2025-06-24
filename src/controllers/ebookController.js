const ebookGenerate = require("../services/ebookGenerate")
const createEbook = require("../services/createEbook")

const generateAndSaveEbook = async (req, res) => {
    const messageUser = req.body;

    try {
        const introduction = await ebookGenerate.generateIntroduction(messageUser.theme);
        const development = await ebookGenerate.generateDevelopment(messageUser.theme);

        console.log("passei:" + introduction + development)

        await createEbook.addEbook({
            introduction,
            development
        })

    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar ebook" })
    }
}

module.exports = {
    generateAndSaveEbook
}