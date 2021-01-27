const fs = require("fs");
const path = require('path');

const autos_db = path.join()

module.exports = {
    getAutos: ()=> JSON.parse(fs.readFileSync(__dirname + "/autos.json", "utf-8")),
    setAutos: (data) => {
        fs.writeFileSync(
            `${__dirname}/autos.json`,
            JSON.stringify(data, null, 2), //null y 2 deja indentado de forma legible el JSON
            "utf-8"
        );
    },
};
