const express = require('express');

const app = express();

// Remove for deployment
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server started on port ${PORT}`);
