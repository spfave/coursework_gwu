require('dotenv').config();

// Server and middleware modules/packages
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('./config/passport');
const connectFlash = require('connect-flash');

// MVC modules/packages
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const routes = require('./routes');

// Server setup
const PORT = process.env.PORT || 5000;
const app = express();

// Middleware - cookie parser (Not needed?)
// app.use(cookieParser(process.env.SESS_SECRET));

// Middleware - session storage
const sess = {
  secret: process.env.SESS_SECRET,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({ db: sequelize }),
};
app.use(session(sess));

// Middleware - connect flash
app.use(connectFlash());

// Middleware - global flash variables
app.use(function (req, res, next) {
  res.locals.msg_success = req.flash('msg_success');
  res.locals.msg_warn = req.flash('msg_warn');
  res.locals.msg_error = req.flash('msg_error');
  res.locals.error = req.flash('error');
  next();
});

// Middleware - passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware - body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Template Engine - Handlebars.js
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sync database connection and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});
