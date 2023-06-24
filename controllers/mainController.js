

let mainController = {
    index: (req, res) =>{
     
        return res.render('fichaMain', { req: req });
    }
    
   
}
module.exports = mainController;