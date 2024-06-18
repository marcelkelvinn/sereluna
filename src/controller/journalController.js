const Journal = require('../model/journalModel');

//mengambil semua journal
const getAllJournal = async (req,res)=>{
    try {
        const journal = await Journal.find({});
        res.status(200).json(journal);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

//mengambil journal by id
const getJournal = async (req,res)=>{
    try {
        const {id} = req.params;
        const journal = await Journal.findById(id);
        res.status(200).json(journal);
        if(!journal){
            return res.status(404).json({message:'cannot find any journal with that id'})
        }
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

//menambahkan journal
const addJournal = async (req,res)=>{
    try {
        const journal = await Journal.create(req.body)
        res.status(200).json(journal)

    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

//menghapus journal
const deleteJournal = async (req,res)=>{
    try {
        const {id} = req.params;
        const journal = await Journal.findByIdAndDelete(id)
        if(!journal){
            return res.status(404).json({message:'cannot find any journal with that id'})
        }
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

module.exports = {getAllJournal,getJournal,addJournal,deleteJournal};
