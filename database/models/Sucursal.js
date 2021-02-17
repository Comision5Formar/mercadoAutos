module.exports = (sequelize, dataTypes) => {

    const alias = 'sucursales';

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
        telefono : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        email : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        administrador_id :{
            type : dataTypes.INTEGER,
            allowNull : false
        },
        direccion_id :{
            type : dataTypes.INTEGER,
            allowNull : false
        }
    }

    const config = {
        tableName : 'sucursales',
        timestamps : false
    }

const Sucursal = sequelize.define(alias, cols, config)

return Sucursal
}