const ebookGenerate = require("../services/ebookGenerate")
const createEbook = require("../services/createEbook")

const generateAndSaveEbook = async(req, res) => {
    const theme = req.body;

    try{
        const introduction = await ebookGenerate.generateIntroduction(theme);

        await createEbook.addEbook({
            introduction,
        })

    } catch(error){
        res.status(500).json({message: "Erro ao gerar ebook"})
    }
}

module.exports = {
    generateAndSaveEbook
}