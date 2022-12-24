const express = require('express')

const PORT = process.env.PORT || 3000;

const app = express();

const initInfo = {
    "intro-message": "",
    "latest-version": "1.0.0"
 }

 const apiLink = {
    "api-url": "https://random.dog/woof.json",
    "params": []
 }

app.get('/init', (req, res)=>{
    res.json(initInfo);
})

app.get('/api', (req, res)=>{
    res.json(apiLink);
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
  