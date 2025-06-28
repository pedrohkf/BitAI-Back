const groq = require('groq-sdk')
const dotenv = require('dotenv')

dotenv.config();

const groqClient = new groq({
    apiKey: process.env.GROQ_API_KEY
})

const generateContent = async (theme, prompt) => {
    console.log(`Tema: ${theme} e prompt ${prompt} \n`)

    if (!theme || typeof theme !== "string") {
        throw new Error("Tema inválido.")
    }

    const chatPrompt = await groqClient.chat.completions.create({
        "messages": [
            {
                "role": "user", "content":
                    `Haja como um escritor de blogs e gere um ${prompt} sobre o tema ${theme}, sem caracteres especiais, como hashtags ou algo do gênero, um texto formal e limpo, no formato abnt.`
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

const generateTitle = (theme) => generateContent(theme, " título curto de no maximo 5 palavras");
const generateSubTitle = (theme) => generateContent(theme, "subtítulo");
const generateComplementTitle = (theme) => generateContent(theme, "título complementar ao invés do principal");
const generateCatchyPhrase = (theme) => generateContent(theme, "uma frase de efeito com no máximo 13 palavras ");
const generateIntroductoryText = (theme) => generateContent(theme, "um texto introdutorio de no mínimo 500 palavras ");
const generateDevelopmentText = (theme) => generateContent(theme, "um texto de desenvolvimento de no mínimo 500 palavras ");
const generateConclusion = (theme) => generateContent(theme, "um texto de conclusão de no mínimo 500 palavras ");


module.exports = {
    generateTitle,
    generateSubTitle,
    generateComplementTitle,
    generateCatchyPhrase,
    generateIntroductoryText,
    generateDevelopmentText,
    generateConclusion,
}