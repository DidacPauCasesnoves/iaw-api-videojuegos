const express = require('express');
const app = express();
const gameRoutes = require('./routes/gameRoutes');

app.use(express.json());

app.use('/api', gameRoutes);

app.listen(8080, () => {
    console.log('Server funcionando http://localhost:8080');
});