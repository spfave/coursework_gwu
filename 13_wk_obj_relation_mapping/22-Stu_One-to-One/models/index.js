const Reader = require("./Reader");
const LibraryCard = require("./LibraryCard");

Reader.hasOne(LibraryCard, {
  foreignKey: "reader_id",
  // TODO: Add a comment describing the functionality of this property
  /**
   * Enforces deletion through the foreign key relationship
   * i.e. deleting a reader deletes their library card through reader_id association
   */
  onDelete: "CASCADE",
});

LibraryCard.belongsTo(Reader, {
  foreignKey: "reader_id",
});

// TODO: Add a comment describing the functionality of this statement
// Exporting two models with addition of foreign key relationships
module.exports = { Reader, LibraryCard };
