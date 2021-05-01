DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;
USE top_songsDB;

CREATE TABLE top5000 (
    id INT NOT NULL AUTO_INCREMENT,
    artist VARCHAR(100) NOT NULL,
    song VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    raw_total DECIMAL(8,4),
    raw_usa DECIMAL(8,4),
    raw_uk DECIMAL(8,4),
    raw_eur DECIMAL(8,4),
    raw_row DECIMAL(8,4),
    PRIMARY KEY (id)
);
