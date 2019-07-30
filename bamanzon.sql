DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE product(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name varchar(30) ,
  department_name VARCHAR(100) not null,
  price decimal (10,2),
  stock_quantity integer(10),
  PRIMARY KEY (item_id)
);

Insert into product( product_name, department_name, Price,stock_quantity)
values("sportbra", "bra department",35, 25 ),
("lacybra", "bra department",35, 25 ),
("pantyhole", "bra department",35, 25 ),
("spanks", "bra department",35, 25 ),
("silk robe", "bra department",35, 25 ),
("dressy dress", "clothes departmen",125, 35 ),
("t-shirt", "clothes department",45, 25 ),
("workout yoga pants", "clothes department",30, 25 ),
("croptop", " clothes department",55, 25 ),
("dress pant", "clothes department",45, 25 );
