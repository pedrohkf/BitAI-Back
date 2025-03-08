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
        "model": "gemma2-9b-it",
        "temperature": 0.6,
        "max_tokens": 1024,
        "top_p": 0.95,
        "stream": false,
        "stop": null
    });

    const responseContent = chatPrompt.choices[0]?.message.content || 'Sem resposta';

    console.log({ response: responseContent })
    res.json({ response: responseContent });
})

module.exports = router;