DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE bamazon(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name varchar(30),
  department VARCHAR(100),
  price varchar
  PRIMARY KEY (id) 
);-  

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);