const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('quote-api:server');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./utils/db');

const quoteRoutes = require('./routes/quote');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('tiny'));
app.use(cors());

app.get('/', (req, res, next) => {
	res.json({ message: 'Welcome to my quotes API :)!' });
});
app.use(quoteRoutes);
app.use((req, res, next) => {
	res.json({ error: 'not exist' });
});

app.listen(PORT, () => {
	debug(`server listening on port: ${PORT}`);
});
