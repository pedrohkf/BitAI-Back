const express = require('express')
const groq = require('groq-sdk')
const dotenv = require('dotenv')

dotenv.config();
const router = express.Router();

const groqClient = new groq({
    apiKey: process.env.GROQ_API_KEY
})

router.post('/', async (req, res) => {
    console.log('Mensagem recebida:', req.body.message);

    const userMessage = req.body.message;

    const chatPrompt = await groqClient.chat.completions.create({
        "messages": [
            {
                "role": "user", "content":
                    `${userMessage}`
            }
        ],
        "model": "llama3-8b-8192",
        "temperature": 1,
        "max_tokens": 1024,
        "top_p": 1,
        "stream": false,
        "stop": null
    });

    const responseContent = chatPrompt.choices[0]?.message.content || 'Sem resposta';

    console.log({ response: responseContent })
    res.json({ response: responseContent });
})

module.exports = router;