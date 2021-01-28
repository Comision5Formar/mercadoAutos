const express = require('express');
const router = express.Router();
const path = require('path');

const {check, validationResult, body} = require('express-validator');

const {createCar,deleteCar,editCar,listCar,storeCar,updateCar,index, register, processRegister, login, processLogin} = require('../controllers/adminController');

const upload = require(path.join('..','utils','multerAutos'))

router.get('/index',index);

//login y register
router.get('/register',register);
router.post('/register',[
    check('username')
        .isLength({
            min: 4
        })
], processRegister);

router.get('/login',login);
router.post('/login',processLogin);

//autos
router.get('/autos/list',listCar);

router.get('/autos/create',createCar);
router.post('/autos/store',upload.any(),storeCar);

router.get('/autos/edit/:id',editCar);
router.put('/autos/update/:id',upload.any(),updateCar);

router.delete('/autos/delete/:id',deleteCar);



module.exports = router;