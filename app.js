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

app.use(quoteRoutes);

app.listen(PORT, () => {
	debug(`server listening on port: ${PORT}`);
});
