const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const {getAutos, setAutos} = require('../data/autos');
const {getAdmins, setAdmins} = require(path.join('..','data','admins'));

const autos = getAutos();
const admins = getAdmins();

module.exports = {
    register : (req,res) => {
        res.render('admin/register')
    },
    processRegister : (req,res) => {
        const {username, pass} = req.body;
       
        if(!username || !pass){
            return res.redirect('/admin/register')
        }

        let result = admins.find(admin => admin.username === username.trim());

        if(result){
            return res.render('admin/register',{
                error : "El username ya está en uso"
            })
        }

        let lastID = 0;
        admins.forEach(admin => {
            if (admin.id > lastID) {
                lastID = admin.id
            }
        });

        let passHash = bcrypt.hashSync(pass.trim(),12)

        const newAdmin = {
            id : +lastID + 1,
            username : username.trim(),
            pass : passHash
        }

        admins.push(newAdmin);

        setAdmins(admins);
        
        res.redirect('/admin/login');

    },
    login : (req, res) => {
        res.render('admin/login')
    },
    processLogin : (req,res) => {
        const {username, pass} = req.body;

        let result = admins.find(admin => admin.username === username.trim());

        if(result){
            if(bcrypt.compareSync(pass.trim(),result.pass)){
                return res.redirect('/admin/index')
            }else{
                res.render('admin/login',{
                    error : "Credenciales inválidas"
                })
            }
        }else{
            res.render('admin/login',{
                error : "Credenciales inválidas"
            })
        }
    },
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
    storeCar : (req,res,next) => {

        let lastID = 0;
        autos.forEach(auto => {
            if (auto.id > lastID) {
                lastID = auto.id
            }
        });

        const {marca, modelo, anio, color, img} = req.body;

        let auto = {
            id: lastID + 1,
            marca,
            modelo,
            anio,
            color,
            img : req.files[0].filename
        }

        autos.push(auto);
        setAutos(autos);
        res.redirect('/admin/autos/list');
    },
    editCar : (req,res) => {

        const auto = autos.find(auto=>auto.id === +req.params.id);


        res.render('admin/carEdit',{
            auto
        })
    },
    updateCar : (req,res,next) => {

        const {marca, modelo, anio, color, img} = req.body;

        autos.forEach(auto => {
            if(auto.id === +req.params.id){

                if(fs.existsSync(path.join('public','images','cars',auto.img))){
                    fs.unlinkSync(path.join('public','images','cars',auto.img));
                }

                auto.id = +req.params.id;
                auto.marca = marca;
                auto.modelo = modelo;
                auto.anio = anio;
                auto.color = color;
                auto.img = req.files[0].filename
            }
        });

        setAutos(autos);

        res.redirect('/admin/autos/list');
    },
    deleteCar : (req,res) => {

        autos.forEach(auto => {
            if(auto.id === +req.params.id){

                if(fs.existsSync(path.join('public','images','cars',auto.img))){
                    fs.unlinkSync(path.join('public','images','cars',auto.img));
                }
                let eliminar = autos.indexOf(auto);
                autos.splice(eliminar,1);
            }
        });

        setAutos(autos);

        res.redirect('/admin/autos/list');
    }
}