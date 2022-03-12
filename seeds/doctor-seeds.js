const { Doctors } = require('../models');

const doctorData = [
    {
        speciality: "GP",
        first_name: "John",
        last_name: "Fang",
        email: "john.fang@example.com",
        isemailcontact: 1,
        password: "123456789p"
    },
    {
        speciality: "Eye Specialist",
        first_name: "Michael",
        last_name: "Thames",
        email: "michael.thames@example.com",
        isemailcontact: 1,
        password: "123456789p"
    },
    {
        speciality: "Heart Specialist",
        first_name: "Silas",
        last_name: "Fermis",
        email: "silas.fermis@example.com",
        isemailcontact: 1,
        password: "123456789p"
    },
    {
        speciality: "Neuro Surgeon",
        first_name: "Shane",
        last_name: "Haymes",
        email: "shane.haymes@example.com",
        isemailcontact: 1,
        password: "123456789p"
    },
    {
        speciality: "Orthodontist",
        first_name: "Tony",
        last_name: "Blummer",
        email: "tony.blummer@example.com",
        isemailcontact: 1,
        password: "123456789p"
    },

];

const seedDoctors = () => Doctors.bulkCreate(doctorData);

module.exports = seedDoctors;

