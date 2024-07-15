// Endpoint to create a text file
app.post('/create-file', (req, res) => {
    // Get the current timestamp
    const timestamp = new Date().toISOString();

    // Generate a filename based on the current date-time
    const filename = `${new Date().toISOString().replace(/[:.]/g, '-')}.txt`;

    // Content of the file is the timestamp
    const content = timestamp;

    // Write the file to the 'files' directory
    fs.writeFile(path.join(__dirname, 'files', filename), content, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating file', error: err });
        }
        res.status(201).json({ message: 'File created', filename });
    });
});
