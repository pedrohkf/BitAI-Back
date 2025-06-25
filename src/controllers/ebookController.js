const ebookGenerate = require("../services/ebookGenerate")
const createEbook = require("../services/createEbook")

const generateAndSaveEbook = async (req, res) => {
    const messageUser = req.body;

    try {
        const title = await ebookGenerate.generateTitle(messageUser.theme);
        const subtitle = await ebookGenerate.generateSubtitle(messageUser.theme);
        const copyright = await ebookGenerate.generateCopyright(messageUser.theme);
        const chapterReaderAvatar = await ebookGenerate.generateChapterReaderAvatar(messageUser.theme);
        const chapterStorytelling = await ebookGenerate.generateChapterStorytelling(messageUser.theme);
        const chapterConnection = await ebookGenerate.generateChapterConnection(messageUser.theme);
        const chapterIntroduction = await ebookGenerate.generateChapterIntroduction(messageUser.theme);
        const chapterProblem = await ebookGenerate.generateChapterProblem(messageUser.theme);
        const chapterSolution = await ebookGenerate.generateChapterSolution(messageUser.theme);
        const chapterInterest = await ebookGenerate.generateChapterInterest(messageUser.theme);
        const chapterDevelopment = await ebookGenerate.generateChapterDevelopment(messageUser.theme);
        const chapterAttention = await ebookGenerate.generateChapterAttention(messageUser.theme);
        const chapterDesire = await ebookGenerate.generateChapterDesire(messageUser.theme);
        const chapterAction = await ebookGenerate.generateChapterAction(messageUser.theme);
        const chapterCaseStudies = await ebookGenerate.generateChapterCaseStudies(messageUser.theme);
        const chapterCTA = await ebookGenerate.generateCTA(messageUser.theme);

        await createEbook.addEbook({
            title, subtitle, copyright, chapterReaderAvatar, chapterStorytelling, chapterConnection, chapterIntroduction, chapterProblem, chapterSolution, chapterInterest, chapterDevelopment, chapterAttention, chapterDesire, chapterAction, chapterCaseStudies, chapterCTA
        });

    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar ebook" })
    }
}

module.exports = {
    generateAndSaveEbook
}