// Vamos configurar o Express (framework web para criação de nossos web services)
const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.setProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produtoAlterar = bancoDeDados.setProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })

    res.send(produtoAlterar)
})

app.delete('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.deleteProduto(req.params.id))
})

app.listen(porta, () => console.log(`Servidor está executando na porta: ${porta}.`))