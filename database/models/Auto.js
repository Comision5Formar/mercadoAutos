module.exports = (sequelize, dataTypes) => {

    const alias = 'autos';

    const cols = {

        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        modelo : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        anio : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        kilometraje : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        descripcion : {
            type : dataTypes.STRING(300),
            allowNull : false
        },       
        usado : {
            type : dataTypes.INTEGER(1),
            allowNull : false
        },
        precio : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        segmento_id :{
            type : dataTypes.INTEGER,
            allowNull : false
        },
        marca_id :{
            type : dataTypes.INTEGER,
            allowNull : false
        },
        color_id :{
            type : dataTypes.INTEGER,
            allowNull : false
        },
        trasmision_id :{
            type : dataTypes.INTEGER,
            allowNull : false
        },
        motor_id :{
            type : dataTypes.INTEGER,
            allowNull : false
        },
        sucursal_id :{
            type : dataTypes.INTEGER,
            allowNull : false
        }
    }

    const config = {
        tableName : 'autos',
        timestamps : false
    }

const Auto = sequelize.define(alias, cols, config)

return Auto
}