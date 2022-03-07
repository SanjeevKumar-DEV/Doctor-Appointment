const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Patients extends Model {}

Patients.init(
    {
        patients_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },

        email: {
            type: DataTypes.STRING, 
            unique: true,
            validate: {
                isEmail: true, 
            },
        },
    
        isemailcontact: {
            type: DataTypes.BOOLEAN
        },

        password: {
            type: DataTypes.STRING,
            Validate: {
                len: [9],
            },
        },
    },
    {
            hooks: {
                beforeCreate: async (newPatientsData) => {
                    newPatientsData.email = await newPatientsData.email.toLowerCase();
                    return newPatientsData; 
                },
                beforeUpdate: async (updatedPatientsData) => {
                    updatedPatientsData.email = await updatedPatientsData.email.toLowerCase();
                    return updatedPatientsData; 
                },
            },
            sequelize,
            timestamps: false,
            modeName: 'patients',
            freezeTableName: true
    },
    
);

module.exports = Patients;
