const express = require('express');
const path = require('path');
const app = express();
const checkWorkingHours = require('./time');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(checkWorkingHours);

app.get('/', (req, res) => {
    res.render('home', { title: 'Accueil' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Nos Services' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contactez-nous' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Page non trouvée' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
