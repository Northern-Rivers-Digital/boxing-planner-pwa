const express = require('express');
const path = require('path');

const app = express();

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Start server on designated port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
