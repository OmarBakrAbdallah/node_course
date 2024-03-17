const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get('/', (req, res) => {
    res.send('<h1>Hello Worldddddddddddddddddd!</h1>');
})
app.get('/test', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
})
app.get('/hello',(req, res)=>{
    res.sendFile('./views/hello.html', {root: __dirname});
})



