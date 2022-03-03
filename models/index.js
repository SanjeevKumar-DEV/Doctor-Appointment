const Patients = require('./Patients');
const Doctors = require('./Doctors');
const Appointments = require ('./Appointments');



Patients.hasMany(Appointments, {
    foreignKey: 'patient_id',
});

Doctors.hasMany(Appointments, {
    foreignKey: 'doctor_id',

});

Appointments.hasOne(Patients, {
    foreignKey: "patients_id",

});

Appointments.hasOne(Doctors, {
    foreignKey: "doctors_id",

});

module.exports = { Appointments, Patients, Doctors};

