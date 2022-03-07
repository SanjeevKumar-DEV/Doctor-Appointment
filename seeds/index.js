const sequelize = require('../config/connection');
const seedPatients= require('./patient-seeds');
const seedDoctors= require('./doctor-seeds');
const seedAppointments= require('./appointment-seeds');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---- DATABASE SYNCED----\n');
    
    await seedPatients();
    console.log('\n---- PATIENTS SEEDED ----\n');

    await seedDoctors();
    console.log('\n---- DOCTORS SEEDED ----\n');

    await seedAppointments();
    console.log('\n---- APPOINTMENTS SEEDED ----\n');

    process.exit(0);
};

seedAll();
