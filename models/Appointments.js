const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Appointments extends Model {}

Appointments.init(
    {
        appointments_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        doctors_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'doctors',
              key: 'doctors_id',
            },
        },
        patients_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'patients',
              key: 'patients_id',
            },
        },
        date_booked: {
            type: DataTypes.DATE,
            allowNull: false, 
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
    },
    {
        sequelize,
        timestamps: false,
        modeName: 'appointments',
        freezeTableName: true
    }    
    
);

module.exports = Appointments;
