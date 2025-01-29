const bcrypt = require("bcrypt");
const dbClient = require("../db");

const home = async(req, res) => {
    res.send('Welcome to my server!');
}

const createdUser = async(req, res)=> {
    const {username,nom, prenom, email, sexe, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const insertDataUsers= `INSERT INTO users(username,nom, prenom, email,sexe,password) VALUES($1,$2,$3,$4,$5,$6)`
        dbClient.query(insertDataUsers,[username,nom,prenom,email,sexe,hashedPassword],(err, result)=>{
            if (err) {
                throw err
            }
            res.json()
        })
    } catch (error) {
        console.error(error);
    }
}

const loginUser = async(req,res)=>{
    
}


module.exports ={
    home,
    createdUser,
    loginUser,
}