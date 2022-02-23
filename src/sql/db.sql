DROP DATABASE IF EXISTS files_app;

CREATE DATABASE IF NOT EXISTS files_app;

USE files_app;


CREATE TABLE IF NOT EXISTS files(
    id_file INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    file VARCHAR(50)
);

CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR (50) NOT NULL,
    first_name VARCHAR (100),
    rol ENUM('ADMIN', 'USUARIO') NOT NULL DEFAULT 'USUARIO',
    pass VARCHAR (255) NOT NULL
);

INSERT INTO files(file) VALUES ("Archivo 1");

INSERT INTO users(user, first_name, pass, rol) VALUES ('Oss','Ossman', '$2a$08$LjwwQ5POn6Pu/evLnA4xeeLOGt5Ys1XmwjEEGwNgqH9OTP7rwd5f2', 'ADMIN');


SELECT * FROM files;
SELECT * FROM users;