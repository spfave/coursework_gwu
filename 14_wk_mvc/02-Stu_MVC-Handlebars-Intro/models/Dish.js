// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities.
// TODO: Add a comment indicating how this file fits into the MVC framework.
/**
 * Defines a data model for use in a model-view-controller
 */

// TODO: What is it responsible for handling?
/**
 * Defining the data representation of a Dish and its interaction with
 * the database through sequelize ORM
 */

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dish extends Model {}

Dish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "dish",
  }
);

module.exports = Dish;
