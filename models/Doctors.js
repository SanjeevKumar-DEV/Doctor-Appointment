const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Doctors extends Model {}

Doctors.init(
    {
        doctors_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        speciality: {
            type: DataTypes.STRING,
            allowNull: false, 
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
                beforeCreate: async (newDoctorsData) => {
                    newDoctorsData.email = await newDoctorsData.email.toLowerCase();
                    return newPatientsData; 
                },
                beforeUpdate: async (updatedDoctorsData) => {
                    updatedDoctorsData.email = await updatedDoctorsData.email.toLowerCase();
                    return updatedDoctorsData; 
                },
            },
            sequelize,
            timestamps: false,
            modeName: 'doctors',
            freezeTableName: true
    },
);
