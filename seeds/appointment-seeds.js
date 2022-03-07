const Appointments = require('../models');

const appointmentData = [
    {
        doctors_id: "1",
        patients_id: "1",
        date_booked: "2020-01-01 15:10:10",
        note: "General problem with digestion.",
    },
    {
        doctors_id: "2",
        patients_id: "2",
        date_booked: "2020-01-01 15:10:10",
        note: "Issue with left eyesight.",
    },
    {
        doctors_id: "3",
        patients_id: "5",
        date_booked: "2020-01-01 15:10:10",
        note: "Heart beat rate faster than usual.",
    },
    
];

const seedAppointments = () => Appointments.bulkCreat(appointmentData);

module.exprots = seedAppointments;
