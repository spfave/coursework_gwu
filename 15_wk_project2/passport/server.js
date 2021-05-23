require('dotenv').config();
const express = require('express');

const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const routes = require('./routes');

const PORT = process.env.PORT || 5000;
const app = express();

const hbs = exphbs.create();

// Configure server app
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Sync database connection and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});
