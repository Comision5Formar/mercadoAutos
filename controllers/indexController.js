module.exports = {
    index:(req,res) =>{
        res.render('home',{
            title : "Home",
            mensaje: "Bienvenidos a mi Mercado Autos S.A."
        })
    },
  
}