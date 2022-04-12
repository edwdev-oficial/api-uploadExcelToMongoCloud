const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb', extended: true }));

const port = 3333;

const Planilha = require('./data/index.js');


app.post('/', async(req, res) => {

    const { file, sheet } = req.body

    const dataSheet = await Planilha.getPlanilha(file, sheet)

    return res.status(200).json(dataSheet)

});

app.listen(port, () => console.log(`app up in http://localhost:${port}`));