INSERT INTO doctors (speciality, first_name, last_name, email, isemailcontact, password) 
VALUES  ("GP", "John", "Fang", "john.fang@example.com", 1, "123456789p"),
        ("Eye Specialist", "Michael", "Thames", "michael.thames@example.com", 1, "123456789p"),
        ("Heart Specialist", "Silas", "Fermis", "silas.fermis@example.com", 1, "123456789p");

INSERT INTO patients (first_name, last_name, email, isemailcontact, password)
VALUES ("Terry", "Cheng", "terry.cheng@example.com", 1, "123456789uu"),
       ("Bob", "Talls", "bob.talls@example.com", 1, "123456789uu"),
       ("Mario", "Fans", "mario.fans@example.com", 1, "123456789uu"),
       ("John", "Aims", "john.aims@example.com", 1, "123456789uu"),
       ("Tanya", "Wallace", "tanya.wallace@example.com", 1, "123456789uu");

INSERT INTO appointments (doctors_id, patients_id, date_booked, notes)
VALUES (1, 1, "2020-01-01 15:10:10", "General problem with digestion."),
       (2, 3, "2020-01-01 15:10:10", "Issue with left eyesight."),
       (3, 5, "2020-01-01 15:10:10", "Heart beat rate faster than usual.");
       
