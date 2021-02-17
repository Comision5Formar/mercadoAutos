
module.exports = (sequelize, dataTypes) => {

    const alias = 'direcciones';

    const cols = {

        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        calle : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        altura : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        localidad : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        provincia :{
            type : dataTypes.STRING(45),
            allowNull : false
        }
    }

    const config = {
        tableName : 'direcciones',
        timestamps : false
    }

const Direccion = sequelize.define(alias, cols, config)

return Direccion
}