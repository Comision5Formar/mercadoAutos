const express = require('express');
const router = express.Router();
const path = require('path');
const validationRegisterAdmin = require('../validations/validationRegisterAdmin')
const validationLoginAdmin = require('../validations/vadlidationLoginAdmin')

const {createCar,deleteCar,editCar,listCar,storeCar,updateCar,index, register, processRegister, login, processLogin} = require('../controllers/adminController');

const upload = require('../utils/multerAutos')

router.get('/index',index);

//login y register
router.get('/register',register);
router.post('/register',validationRegisterAdmin, processRegister);

router.get('/login',login);
router.post('/login',validationLoginAdmin, processLogin);

//autos
router.get('/autos/list',listCar);

router.get('/autos/create',createCar);
router.post('/autos/store',upload.any(),storeCar);

router.get('/autos/edit/:id',editCar);
router.put('/autos/update/:id',upload.any(),updateCar);

router.delete('/autos/delete/:id',deleteCar);



module.exports = router;