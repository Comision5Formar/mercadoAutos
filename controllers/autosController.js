const autos = require('../data/autos');

module.exports = {
    index:(req,res) => {
        res.render('autos',{
            title:"Automotores",
            autos
        });
    },
    detail:(req,res)=>{
        res.render('autosDetail');
    }
}