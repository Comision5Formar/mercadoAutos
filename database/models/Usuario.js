
module.exports = (sequelize, dataTypes) => {

    const alias = 'usuarios';

    const cols = {

        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        nombre : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        apellido : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        email : {
            type : dataTypes.STRING(45),
            allowNull : false,
            unique: true
        },
        password :{
            type : dataTypes.STRING(100),
            allowNull : false
        },
        fecha_nac :{
            type : dataTypes.DATE,
            allowNull : false
        }
    }

    const config = {
        tableName : 'usuarios',
        timestamps : false,
        modelName : 'Usuario'
    }

const Usuario = sequelize.define(alias, cols, config)

return Usuario
}