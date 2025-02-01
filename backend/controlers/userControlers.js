const bcrypt = require("bcrypt");
const dbClient = require("../db");

const home = async(req, res) => {
    res.send('Welcome to my server!');
}

const createdUser = async(req, res)=> {
    const {username,nom, prenom, email, sexe, password} = req.body;

    if (!username || !nom || !prenom || !email || !sexe || !password) {
        return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const insertDataUsers= `INSERT INTO users(username,nom, prenom, email,sexe,password) VALUES($1,$2,$3,$4,$5,$6) RETURNING*`
        dbClient.query(insertDataUsers,[username,nom,prenom,email,sexe,hashedPassword],(err, results)=>{
            if (err) {
                throw err
            }
            res.json(results.rows[0])
            console.log(req.body);
        })
        
    } catch (error) {
        console.error(error);
    }
}

const loginUser = async(req,res)=>{
    const { email, password } = req.body;
    try {
        const queryUser = `SELECT * FROM users WHERE email = $1`;
        const result = await dbClient.query(queryUser,[email]);

        if (result.rows.length === 0) {
            return res.status(400).json({error:"User not found, create an account"})
        }
        const user = result.rows[0];
        const passCheck = await bcrypt.compare(password, user.password);

        if (passCheck) {
            res.status(200).json({message:"Connexion réussie!"})
        } else {
            res.status(200).json({error:"Email or password is invalid, try again"})
        }
    } catch (error) {
        console.error(error);
    }
}


module.exports ={
    home,
    createdUser,
    loginUser,
}