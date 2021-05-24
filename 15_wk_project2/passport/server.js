require('dotenv').config();

// Server modules/packages
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');

// MVC modules/packages
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const routes = require('./routes');

// Server setup
const PORT = process.env.PORT || 5000;
const app = express();

const sess = {
  secret: process.env.SESS_SECRET,
  cookie: { maxAge: 60 * 60 * 1000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

// MVC setup
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Sync database connection and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});

/* NOTES
ExpressJS and PassportJS Sessions Deep Dive
https://www.airpair.com/express/posts/expressjs-and-passportjs-sessions-deep-dive
*/
