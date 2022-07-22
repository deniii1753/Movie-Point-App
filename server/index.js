const express = require('express');

const { connectDatabase } = require('./config/database');
const { port } = require('./config/settings.json');
const routes = require('./src/router');
const { errorHandler } = require('./src/middlewares/errorHandler');

const app = express();

require('./config/express')(app, express);

app.use('/api', routes);
app.use(errorHandler);

connectDatabase()
    .then(() => app.listen(port, () => console.log(`Database connected! Server listening on port ${port}! ...`)))
    .catch(err => {
        console.error('An error occured!');
        console.log(err);
    });