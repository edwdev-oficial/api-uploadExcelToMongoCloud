const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb', extended: true }));

const port = 3333;


app.get('/', async(req, res) => {
    const msg = { msg: 'Tudo Ok!!!' }
    res.status(200).json(msg)

});




app.listen(port, () => console.log(`app up in http://localhost:${port}`));