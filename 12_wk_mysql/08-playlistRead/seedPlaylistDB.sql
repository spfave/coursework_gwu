DROP DATABASE IF EXISTS playlistDB;
CREATE DATABASE playlistDB;
USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NULL,
  artist VARCHAR(100) NULL,
  genre VARCHAR(50),
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES 
("song 1", "artist 1", "pop"),
("song 2", "artist 1", "rock"),
("song 3", "artist 2", "hip-hop");