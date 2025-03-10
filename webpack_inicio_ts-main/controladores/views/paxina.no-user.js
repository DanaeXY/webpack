const path = require("path");

const paxinaNoUser = (req,res)=>{
    const optionsRuta = {
        root: path.join(__dirname, "../../dist"),
    };
    
    res.sendFile("./views/no-user.html", optionsRuta);
    //res.sendFile(path.join(__dirname,"./dist/controladores/views/no-user.html"))
}

module.exports = paxinaNoUser