const path = require("path");

const paxinaApp = (req,res)=>{
    const optionsRuta = {
        root: path.join(__dirname, "../../dist"),
    };
    res.sendFile("./views/app.html", optionsRuta);
    //res.sendFile(path.join(__dirname,"./dist/controladores/views/app.html"))
}

module.exports = paxinaApp