DROP database IF exists movie_Planner_db;

CREATE DATABASE movie_planner_db;
USE movie_planner_db;
-- Create the table plans.
CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('Rush Hour 2');





