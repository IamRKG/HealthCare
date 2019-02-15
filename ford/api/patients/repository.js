const patientModel = require("../patients/model");
const patientConstructor = require("../dataShape/patientConstructor")


const patientRepo = function (){

        const getAllPatient = function(req,res){

                patientModel.find({}, (err,response) => res.send(response));
        }

        const getPatientById = function (req,res){
            patientModel.findById({_id:req.params.id}, (err,response) => res.send(response));
        }

        const savePatient = function(req,res){
            const newSavePatient = new patientConstructor(req)
            const newPatient = patientModel(newSavePatient.getPatientShape());
            newPatient.save((err) => res.send({"message":"succes"}));
        }

        const updatePatient = function(req,res){
          const updatePatientById = new patientConstructor(req)
            patientModel.findByIdAndUpdate(req.body._id,updatePatientById.getPatientShape(), (err) => res.send({"message":"updated"}))
        }

        const search = function (req,res) {
            const searchResult = [];
            patientModel.find({},(err, response) =>{
              response.filter((result) => {
                    if(result.patientID){
                        if(result.patientID.toString().indexOf(req.query.patientID) !== -1){
                            searchResult.push(result);
                        };
                    }
              });
               res.send(searchResult);
          });
        };

        const deletePatient = (req,res) => {

            patientModel.findByIdAndRemove({_id:req.params.id}, (err,response) =>{
                res.send({done:'Done'});
            })

        };

    return {
        getAllPatient:getAllPatient,
        getPatientById:getPatientById,
        savePatient:savePatient,
        updatePatient:updatePatient,
        search:search,
        deletePatient:deletePatient
    }
}

module.exports = patientRepo();
