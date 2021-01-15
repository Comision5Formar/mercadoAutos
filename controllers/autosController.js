const autos = require('../data/autos');

module.exports = {
    index:(req,res) => {
        res.render('autos',{
            title:"Automotores",
            autos
        });
    },
    show:(req,res)=>{
        let auto = autos.find(auto=>{
            return auto.id == req.params.id
        });
        res.render('autosDetail',{
            title: "Vista de detalle",
            auto
        });
    }
}