const express = require('express');
const Ebook = require('../models/Ebook');
const User = require('../models/User');

const router = express.Router();

router.post('/add', async (req, res) => {
    const {
        cape,
        title,
        authorName,
        brandApresentation,
        baseTheme,
        introductionTheme,
        fundamentalTheme,
        principlesTheme,
        conclusionTheme,
        links = [],
        contact,
        createadAt,
        user: userId
    } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        const newEbook = new Ebook({
            cape,
            title,
            authorName,
            brandApresentation,
            baseTheme,
            introductionTheme,
            fundamentalTheme,
            principlesTheme,
            conclusionTheme,
            links,
            contact,
            createadAt: createadAt || new Date(),
            user: userId
        });

        await newEbook.save();
        res.status(201).json(newEbook);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar eBook', details: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const ebooks = await Ebook.find({ user: userId });

        if (!ebooks || ebooks.length === 0) {
            return res.status(404).json({ error: 'Nenhum eBook encontrado para este usuário.' });
        }

        res.json(ebooks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar eBooks', details: error.message });
    }
});

router.get('/bit-ai/:ebookId', async (req, res) => {
    const { ebookId } = req.params;

    try {
        const ebook = await Ebook.findById(ebookId);

        if (!ebook) {
            return res.status(404).json({ error: 'eBook não encontrado.' });
        }

        res.json(ebook);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar eBook', details: error.message });
    }
});

module.exports = router;
