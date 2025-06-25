const groq = require('groq-sdk')
const dotenv = require('dotenv')

dotenv.config();

const groqClient = new groq({
    apiKey: process.env.GROQ_API_KEY
})

const generateContent = async (theme, prompt) => {
    console.log(`Tema: ${theme} e prompt ${prompt} \n`)

    const chatPrompt = await groqClient.chat.completions.create({
        "messages": [
            {
                "role": "user", "content":
                    `Gerar uma ${prompt} com no mínimo 500 palavras sobre o tema: ${theme}, sem caracteres especiais como hashtags ou algo do gênero, um texto formal.`
            }
        ],
        "model": "gemma2-9b-it",
        "temperature": 0.6,
        "max_tokens": 1024,
        "top_p": 0.95,
        "stream": false,
        "stop": null
    });

    const responseContent = chatPrompt.choices[0]?.message.content || 'Sem resposta';

    return responseContent;
}

const generateTitle = (theme) => generateContent(theme, "título");
const generateSubtitle = (theme) => generateContent(theme, "subtítulo");
const generateCopyright = (theme) => generateContent(theme, "copyright");
const generateChapterReaderAvatar = (theme) => generateContent(theme, "para quem este livro serve?");
const generateChapterStorytelling = (theme) => generateContent(theme, "storytelling");
const generateChapterConnection = (theme) => generateContent(theme, "conexão");
const generateChapterIntroduction = (theme) => generateContent(theme, "introdução");
const generateChapterProblem = (theme) => generateContent(theme, "problemas");
const generateChapterSolution = (theme) => generateContent(theme, "soluções dos problemas");
const generateChapterInterest = (theme) => generateContent(theme, "interesse");
const generateChapterDevelopment = (theme) => generateContent(theme, "desenvolvimento");
const generateChapterAttention = (theme) => generateContent(theme, "atenção");
const generateChapterDesire = (theme) => generateContent(theme, "desejo");
const generateChapterAction = (theme) => generateContent(theme, "ação");
const generateChapterCaseStudies = (theme) => generateContent(theme, "casos de estudo");
const generateCTA = (theme) => generateContent(theme, "agradecimento e CTA");


module.exports = {
    generateTitle,
    generateSubtitle,
    generateCopyright,
    generateChapterReaderAvatar,
    generateChapterStorytelling,
    generateChapterConnection,
    generateChapterIntroduction,
    generateChapterProblem,
    generateChapterSolution,
    generateChapterInterest,
    generateChapterDevelopment,
    generateChapterAttention,
    generateChapterDesire,
    generateChapterAction,
    generateChapterCaseStudies,
    generateCTA,
}