const express = require('express')
const app     = express()
const port    = 3000

app.get('/', (req, res) => {
    res.send('até então tudo de boa ramon xis costela')
})

app.listen(port, () => {
    console.log('executando na porta', port)
})