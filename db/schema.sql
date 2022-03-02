DROP DATABASE IF EXISTS docpat_db;
CREATE DATABASE docpat_db;

USE docpat_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
  
);

CREATE TABLE doctors (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE appointment (
  id INT NOT NULL, APPOINTMENT_ID
  id INT NOT NULL, USERS_ID
  id INT NOT NULL, DOC_ID
  date_booked DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, 
  confirm BOOLEAN NOT NULL,
);

