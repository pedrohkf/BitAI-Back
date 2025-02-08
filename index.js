const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const users = require('./src/routes/usersRoutes');
const authRoutes = require('./src/routes/authRoutes');
const iaRoutes = require('./src/routes/iaRoutes');
const categorieRoutes = require("./src/routes/categoriesRoutes");
const blogsRoutes = require("./src/routes/blogRoutes");
const iaBlogRoutes = require("./src/routes/iaBlogRoutes");

require('dotenv').config();
const app = express();

app.use(cors({
     origin: '*',
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}));


//upodates
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT'],
//     credentials: true
// }));

app.use(express.json());
app.use('/users', users);
app.use('/auth', authRoutes);
app.use('/ias', iaRoutes);
app.use('/category', categorieRoutes);
app.use('/blogs', blogsRoutes);
app.use('/ia', iaBlogRoutes);

const port =  process.env.PORT || 3001;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conexão com MongoDB"))
    .catch(() => console.log("Erro na conexão"));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = (req, res) => {
    res.status(200).json({ message: "Hello World" });
  };
