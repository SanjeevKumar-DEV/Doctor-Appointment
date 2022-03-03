const Patients = require('../models/patients');

const patientData = [
    {
        first_name: "",
        last_name: "",
        email: "",
        isemailcontact: true,
        password: ""
    },
    {
        first_name: "",
        last_name: "",
        email: "",
        isemailcontact: true,
        password: ""
    },
    {
        first_name: "",
        last_name: "",
        email: "",
        isemailcontact: true,
        password: ""
    },
    {
        first_name: "",
        last_name: "",
        email: "",
        isemailcontact: true,
        password: ""
    },
    {
        first_name: "",
        last_name: "",
        email: "",
        isemailcontact: true,
        password: ""
    },
];

const seedPatients = () => Patients.bulkCreate(patientData);

module.exports = seedPatients;
