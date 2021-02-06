const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./utils/db');

const app = express();

app.listen(process.env.PORT || 3000);
