const jsonOffre = require('../OffreLists.json');

const getAllOffres = async (req, res)=>{
    res.json(jsonOffre)
}

const offreById = async (req, res) => {
    const id = Number(req.params.id, 5);
    const offre =jsonOffre.offresLists.find(idOffre => idOffre.id === id)
    res.json(offre || {message: "Offre non trouvé"})
}

module.exports= {
    getAllOffres,
    offreById
}