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
        dbClient.query(insertDataUsers,[username,nom,prenom,email,sexe,hashedPassword],(err, result)=>{
            if (err) {
                throw err
            }
            res.json(result.rows[0])
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

const updateUser= async(req,res)=>{
    const id= parseInt(req.params.id);
    const { username } = req.body;

    const setUpdate = `UPDATE users SET username=$1 WHERE id=$2 RETURNING*`
    const result= await dbClient.query(setUpdate,[username, id]);
    if (result.rows.length === 0) {
        return res.status(400).json({error:"User not found, create an account"})
    }
    
    res.status(200).json({message:"Updated successfull", user:result.rows[0]})
}

const deleteUser= async(req,res)=>{
    const id = parseInt(req.params.id);
    
    try {
        const setDelete = `DELETE FROM users WHERE id=$1 RETURNING*`;
        const result= await dbClient.query(setDelete,[id]);
        
        if (result.rowCount === 0) {
            return res.status(400).json({error:"User not found, Sin In create an account"})
        }
        
        res.status(200).json({message:"Deleted successfull", user:result.rows[0]})    
    } catch (error) {
        console.error(error);
    }
}

module.exports ={
    home,
    createdUser,
    loginUser,
    updateUser,
    deleteUser
}