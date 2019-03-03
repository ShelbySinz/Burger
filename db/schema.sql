CREATE DATABASE burgers_db;
USE burgers_db;
select * from burger;
-- Create the table tasks.

USE burgers_db;
CREATE TABLE burger
(
id int NOT NULL AUTO_INCREMENT,
BurgerName varchar(255) NOT NULL,
devoured boolean,
PRIMARY KEY (id)
);

