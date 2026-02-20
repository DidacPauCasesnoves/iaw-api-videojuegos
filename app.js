const express = require('express');
const app = express();
const gameRoutes = require('./routes/gameRoutes');

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use('/api', gameRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Videojuegos corriendo en puerto ${PORT}`);
});