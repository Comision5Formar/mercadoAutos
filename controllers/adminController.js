const autos = require('../data/autos');

module.exports = {
    index : (req,res)=>{
        res.render('admin/index')
    },
    listCar : (req,res)=>{
        res.render('admin/carList',{
            autos
        })
    },
    createCar : (req,res)=> {
        res.render('admin/carCreate')
    },
    storeCar : (req,res) => {

    },
    editCar : (req,res) => {
        res.render('admin/carEdit')
    },
    updateCar : (req,res) => {

    },
    deleteCar : (req,res) => {

    }
}