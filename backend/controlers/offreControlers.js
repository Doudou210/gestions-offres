const dbClient = require('../db');
const jsonOffre = require('../OffreLists.json');

const getAllOffres = async (req, res)=>{
    const request = `SELECT * from offres`
    dbClient.query(request,(err, result) =>{
        if (err) {
            throw err
        }
        res.status(200).json(result.rows)
    })
}

const addOffre = (req, res) => {
    const { title, description, entreprise, lieu} = req.body;
    if(!title || !description || !entreprise || !lieu){
        return res.status(400).json("Required")
    }
    
    //Request for insert data in data
    const insertData = `INSERT INTO offres(title, description, entreprise,lieu) VALUES ($1,$2,$3,$4)`;
    dbClient.query(insertData,[title,description,entreprise,lieu], (err,result)=>{
        if (err) {
            console.error("Error inserting data");
            res.status(401).json('Failled');
        } else {
            console.log("Successfully");
            res.status(201).json('Offre is added successfully');
        }
    })
}

const offreById = async (req, res) => {
    const id = parseInt(req.params.id_offres);

    const getIdRequest= `SELECT * from offres WHERE id_offres=$1`
    dbClient.query(getIdRequest,[id],(error, result)=>{
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

module.exports= {
    getAllOffres,
    offreById,
    addOffre
}