const Patients = require('./patients');
const Doctors = require('./Doctors');
const Appointments = require ('./Appointments');


Patients.hasMany(Appointments, {
    foreignKey: 'patients_id',
});

Appointments.belongsTo(Patients, {
    foreignKey: 'patients_id',
});

Doctors.hasMany(Appointments, {
    foreignKey: 'doctors_id',
});

Appointments.belongsTo(Doctors, {
    foreignKey: 'doctors_id',
});

module.exports = { Patients, Doctors, Appointments };

