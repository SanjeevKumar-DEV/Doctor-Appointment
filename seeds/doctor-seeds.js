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

];

const seedDoctors = () => Doctors.bulkCreate(doctorData);

module.exprots = seedDoctors;

