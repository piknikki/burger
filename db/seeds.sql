DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE  burgers_db;
USE burgers_db;

CREATE TABLE  burgers(
  id INT auto_increment not null,
  burger_name varchar (50),
  devoured boolean default false,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name)
VALUES ("Avocado Bacon Burger");

INSERT INTO burgers (burger_name)
VALUES ("Bacon Blue Cheese Burger");

INSERT INTO burgers (burger_name)
VALUES ("Cheeseburger");
