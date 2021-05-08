const { UUIDV4, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class LibraryCard extends Model {}

LibraryCard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Use Sequelize's UUID functionality to generate a unique number for the library card instead of making us do it ourselves
    card_number: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    // TODO: Add a comment describing what this column holds information for
    // Foreign key relation to a reader
    reader_id: {
      type: DataTypes.INTEGER,
      references: {
        // TODO: Add a comment describing where `reader` comes from
        // from Reader model
        model: "reader",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "library_card",
  }
);

module.exports = LibraryCard;
