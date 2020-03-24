const express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  cors = require('cors'),
  helmet = require('helmet')

const indexRouter = require('./routes/index'),
  apiRouter = require('./routes/api')

const app = express();

// Helmet setup
app.use(helmet())

// CORS setup
app.use(cors())

// Enables logger in development mode
if (!process.env.PROD)
  app.use(logger('dev'));

app.use(express.json({ limit: '12mb' }))
app.use(express.urlencoded({ limit: '12mb', extended: true }))

// Static path
app.use(express.static(path.join(__dirname, 'public')));

/* Routes  */
app.use('/api', apiRouter);
app.use('/', indexRouter);

module.exports = app;
