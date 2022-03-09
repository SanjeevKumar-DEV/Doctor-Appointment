const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require ('../config/connection');

class Patients extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

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
                    newPatientsData.password = await bcrypt.hash(newPatientsData.password, 10);
                    return newPatientsData; 
                },
                beforeUpdate: async (updatedPatientsData) => {
                    updatedPatientsData.email = await updatedPatientsData.email.toLowerCase();
                    updatedPatientsData.password = await bcrypt.hash(updatedPatientsData.password, 10);
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
