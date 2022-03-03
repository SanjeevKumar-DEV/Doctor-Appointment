DROP DATABASE IF EXISTS docpat_db;
CREATE DATABASE docpat_db;

USE docpat_db;

CREATE TABLE patients (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(255) NOT NULL,
  -- active BOOLEAN NOT NULL,
  
  password VARCHAR(255) NOT NULL
  
);

CREATE TABLE doctors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR (255) NOT NULL,
  -- active BOOLEAN NOT NULL,
  
  password VARCHAR(255) NOT NULL
);

CREATE TABLE appointments (
  id INT NOT NULL,
  patient_id INT NOT NULL
  doctor_id INT NOT NULL,
  date_booked DATETIME DEFAULT NOT NULL,
);

