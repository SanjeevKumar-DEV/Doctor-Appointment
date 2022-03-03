const Appointments = require('../models/appointments');

const appointmentData = [
    {
        appointment_id: "",
        patient_id: "",
        doctor_id: "",
        date_book: ""
    },
    {
        appointment_id: "",
        patient_id: "",
        doctor_id: "",
        date_book: ""
    },
    {
        appointment_id: "",
        patient_id: "",
        doctor_id: "",
        date_book: ""
    },
    {
        appointment_id: "",
        patient_id: "",
        doctor_id: "",
        date_book: ""
    },
    {
        appointment_id: "",
        patient_id: "",
        doctor_id: "",
        date_book: ""
    },
    {
        appointment_id: "",
        patient_id: "",
        doctor_id: "",
        date_book: ""
    },
];

const seedAppointments = () => Appointments.bulkCreat(appointmentData);

module.exprots = seedAppointments;
