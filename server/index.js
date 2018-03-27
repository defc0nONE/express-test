const express = require('express')
const app = express()

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.json({
        foo: 'bar'
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
