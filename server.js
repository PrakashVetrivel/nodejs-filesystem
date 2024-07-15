const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/create-file', (req, res) => {
    const timestamp = new Date().toISOString();
    const filename = `${new Date().toISOString().replace(/[:.]/g, '-')}.txt`;
    const content = timestamp;
    
    fs.writeFile(path.join(__dirname, 'files', filename), content, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating file', error: err });
        }
        res.status(201).json({ message: 'File created', filename });
    });
});

app.get('/files', (req, res) => {
    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading files', error: err });
        }
        res.status(200).json({ files });
    });
});
app.get('/',(req, res)=>{
    res.status(200).send(
        `<div style="background-color:blue ; color: white >
        <h1> using html,my dear friends </h1>
        </div>`
    )
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
