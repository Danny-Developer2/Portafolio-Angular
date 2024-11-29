const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Servir los archivos estáticos de la build de Angular
app.use(express.static(path.join(__dirname, 'dist/portafolio/browser/browser')));

// Ruta para cualquier otra solicitud, servir el index.html de Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/portafolio/browser/browser/index.csr.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
