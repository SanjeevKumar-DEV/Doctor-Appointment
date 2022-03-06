const  { Patients } = require('../models');

const patientData = [
    {
        first_name: "Terry",
        last_name: "Cheng",
        email: "terry.cheng@example.com",
        isemailcontact: 1,
        password: "123456789uu"
    },
    {
        first_name: "Bob",
        last_name: "Talls",
        email: "bob.talls@example.com",
        isemailcontact: 1,
        password: "123456789uu"
    },
    {
        first_name: "Mario",
        last_name: "Fans",
        email: "mario.fans@example.com",
        isemailcontact: 1,
        password: "123456789uu"
    },
    {
        first_name: "John",
        last_name: "Aims",
        email: "john.aims@example.com",
        isemailcontact: 1,
        password: "123456789uu"
    },
    {
        first_name: "Tanya",
        last_name: "Wallace",
        email: "tanya.wallace@example.com",
        isemailcontact: 1,
        password: "123456789uu"
    },
];

const seedPatients = () => Patients.bulkCreate(patientData);

module.exports = seedPatients;
