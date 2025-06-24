const groq = require('groq-sdk')
const dotenv = require('dotenv')

dotenv.config();

const groqClient = new groq({
    apiKey: process.env.GROQ_API_KEY
})

const generateIntroduction = async (theme) => {
    const chatPrompt = await groqClient.chat.completions.create({
        "messages": [
            {
                "role": "user", "content":
                    `gerar uma introdução com no mínimo 400 palavras sobre o tema: ${theme}`
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

    console.log({ response: responseContent })
    return responseContent;
}

module.exports = {
    generateIntroduction
}