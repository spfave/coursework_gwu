DROP DATABASE IF EXISTS greatBay_DB;
CREATE DATABASE greatBay_DB;
USE greatBay_DB;

CREATE TABLE auctions(
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(100) NOT NULL,
    bid INT DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO auctions (item_name, bid)
VALUES
("Monitor", 500),
("GPU", 2500);

INSERT INTO auctions (item_name)
VALUES
("CPU"),
("Keyboard");