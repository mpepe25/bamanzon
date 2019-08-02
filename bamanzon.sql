DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name varchar(30) ,
  department_name VARCHAR(100) not null,
  price decimal (10,2),
  stock_quantity integer(10),
  PRIMARY KEY (item_id)
);

Insert into products( product_name, department_name, Price,stock_quantity)
values("sportbra", "bra department",35, 197 ),
("lacybra", "bra department",35, 145 ),
("pantyhole", "bra department",35, 120 ),
("spanks", "bra department",35, 125 ),
("silk robe", "bra department",35, 160 ),
("dressy dress", "clothes departmen",125, 187 ),
("t-shirt", "clothes department",45, 200 ),
("workout yoga pants", "clothes department",30, 160 ),
("croptop", " clothes department",55, 200 ),
("dress pant", "clothes department",45, 198 );

 