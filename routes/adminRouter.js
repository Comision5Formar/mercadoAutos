const express = require('express');
const router = express.Router();
const {createCar,deleteCar,editCar,listCar,storeCar,updateCar,index} = require('../controllers/adminController');


router.get('/index',index);

router.get('/autos/list',listCar);

router.get('/autos/create',createCar);
router.post('/autos/store',storeCar);

router.get('/autos/edit/:id',editCar);
router.put('/autos/update/:id',updateCar);

router.delete('/autos/delete/:id',deleteCar);



module.exports = router;