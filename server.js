const express = require('express');
const path = require('path');

const app = express();

// Serve static files from Angular dist folder
app.use(express.static(path.join(__dirname, 'dist/my-website/browser')));

// Handle SPA routes (redirect all unknown routes to index.html)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/my-website/browser/index.html'));
});

// Set the port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
