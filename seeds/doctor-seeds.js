const Doctors = require('../models/doctors');

const doctorData = [
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

const seedDoctors = () => Doctors.bulkCreate(doctorData);

module.exprots = seedDoctors;

