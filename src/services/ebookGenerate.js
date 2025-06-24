const groq = require('groq-sdk')
const dotenv = require('dotenv')

dotenv.config();

const groqClient = new groq({
    apiKey: process.env.GROQ_API_KEY
})

const generateIntroduction = async (theme) => {
    console.log("PASSANDO: " + theme)

    const chatPrompt = await groqClient.chat.completions.create({
        "messages": [
            {
                "role": "user", "content":
                    `gerar um introdução com no mínimo 500 palavras sobre o tema: ${theme}, mas apenas com virgulas e pontos, nada de # ou algo do tipo`
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

const generateDevelopment = async (theme) => {
    console.log("PASSANDO desenvolvimento: " + theme)

    const chatPrompt = await groqClient.chat.completions.create({
        "messages": [
            {
                "role": "user", "content":
                    `gerar um desenvolvimento com no mínimo 500 palavras sobre o tema: ${theme}, mas apenas com virgulas e pontos, nada de # ou algo do tipo`
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

module.exports = {
    generateIntroduction,
    generateDevelopment
}