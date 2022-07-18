const express = require('express');

const { connectDatabase } = require('./config/database');
const { port } = require('./config/settings.json');
const routes = require('./src/router');

const app = express();

require('./config/express')(app, express);

app.use(routes);

connectDatabase()
    .then(() => app.listen(port, () => console.log(`Database connected! Listening on port ${port}! ...`)))
    .catch(err => {
        console.error('An error occured!');
        console.log(err);
    });