const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// TODO: Explain what is being initialized
// Initalizing sequelize with session storage to the database
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comments describing the implementation of sessions
/**
 * Create sess object with configuration parameters to be used by a session
 */
const sess = {
  secret: "Super secret secret",
  // TODO: Add comments describing the implementation of cookies
  /**
   * Use cookie to save session data to persist data between connections
   * Sets the cookie to timeout after 150 seconds
   */
  cookie: {
    maxAge: 150000,
  },
  resave: false,
  saveUninitialized: true,
  // TODO: Add comments describing the implementation of the store
  /**
   * Sets the database connection for session storage as the db connection
   * defined in ./config/connection. Will store session data in db so can
   * be checked from any server
   */
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
