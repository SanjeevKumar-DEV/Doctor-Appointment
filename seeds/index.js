const seedPatients= require('./patient-seeds');
const seedDoctors= require('./doctor-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
        console.log('\n---- DATABASE SYNCED----\n');
    
    await seedPatients();
    console.log('\n---- PATIENTS SEEDED ----\n');

    await seedDoctors();
    console.log('\n---- DOCTORS SEEDED ---\n');

    ProcessingInstruction.exit(0);
};

seedAll();
