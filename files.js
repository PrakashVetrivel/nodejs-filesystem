// Endpoint to retrieve all text files
app.get('/files', (req, res) => {
    // Read the 'files' directory
    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading files', error: err });
        }
        res.status(200).json({ files });
    });
});
