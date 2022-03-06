DROP DATABASE IF EXISTS docpat_db;
CREATE DATABASE docpat_db;

USE docpat_db;

CREATE TABLE `Patients` (
  `patients_id` INTEGER NOT NULL auto_increment, 
  `first_name` VARCHAR(255) NOT NULL, 
  `last_name` VARCHAR(255) NOT NULL, 
  `email` VARCHAR(255) UNIQUE, 
  `isemailcontact` TINYINT(1), 
  `password` VARCHAR(255), 
  PRIMARY KEY (`patients_id`)
  );

CREATE TABLE `Doctors` (
  `doctors_id` INTEGER NOT NULL auto_increment, 
  `speciality` VARCHAR(255) NOT NULL, 
  `first_name` VARCHAR(255) NOT NULL, 
  `last_name` VARCHAR(255) NOT NULL, 
  `email` VARCHAR(255) UNIQUE, 
  `isemailcontact` TINYINT(1), 
  `password` VARCHAR(255), 
  PRIMARY KEY (`doctors_id`)) ENGINE=InnoDB;

CREATE TABLE `Appointments` (
  `appointments_id` INTEGER NOT NULL auto_increment, 
  `doctors_id` INTEGER, 
  `patients_id` INTEGER, 
  `date_booked` DATETIME NOT NULL, 
  `notes` VARCHAR(255) NOT NULL, 
  PRIMARY KEY (`appointments_id`), 
  FOREIGN KEY (`doctors_id`) 
  REFERENCES `doctors` (`doctors_id`), 
  FOREIGN KEY (`patients_id`) 
  REFERENCES `patients` (`patients_id`)
  );

