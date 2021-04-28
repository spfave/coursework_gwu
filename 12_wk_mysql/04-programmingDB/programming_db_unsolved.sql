-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;
USE programming_db

-- Use programming db for the following statements --

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  -- Create a string column called "languages" --
  -- Create an integer column called "rating" --
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  -- Set the id as this table's primary key

  id INT NOT NULL AUTO_INCREMENT,
  languages VARCHAR(100),
  rating INT,
  PRIMARY KEY (id)
);

-- Create new example rows
INSERT INTO programming_languages (languages, rating)
VALUES ("JavaScript", 3);

INSERT INTO programming_languages (languages, rating)
VALUES ("Python", 3);

UPDATE programming_languages
SET rating = 1
WHERE id = 1;

ALTER TABLE programming_languages
ADD COLUMN mastered INT DEFAULT false AFTER rating;

DELETE FROM programming_languages
WHERE rating < 3;