const patientModel = require("../patients/model");

const patientRepo = function (){

        const getAllPatient = function(req,res){
                
                patientModel.find({}, (err,response) => res.send(response));
        }
        
        const getPatientById = function (req,res){
            patientModel.findById({_id:req.params.id}, (err,response) => res.send(response));
        }

        const savePatient = function(req,res){
            const newPatient = patientModel({
                    patientID:req.body.patientID,
                    patientName:req.body.patientName,
                    age:req.body.age,
                    contactNo:req.body.contactNo,
                    IPNo:req.body.IPNo,  
                    bloodGroup:req.body.bloodGroup,
                    address:req.body.address,
                    emailAddress:req.body.emailAddress,
                    doctorName:req.body.doctorName,
                    speciality:req.body.speciality,
                    paitentClinicalHistory:req.body.paitentClinicalHistory,
                    treatmentsProcedures:req.body.treatment,
                    diagnosisProvisional:req.body.diagnosisProvisional,
                    notes:req.body.notes,
                    treatment:req.body.treatment,
                    investigation:req.body.investigation,
                    reviewAdvise:req.body.reviewAdvise,
                    amount:req.body.amount,
                    consent:req.body.consent
            })
            newPatient.save((err) => res.send({"message":"succes"}));
        }

        const updatePatient = function(req,res){
            const updatePatient = {
                patientID:req.body.patientID,
                patientName:req.body.patientName,
                age:req.body.age,
                contactNo:req.body.contactNo,
                IPNo:req.body.IPNo,  
                bloodGroup:req.body.bloodGroup,
                address:req.body.address,
                emailAddress:req.body.emailAddress,
                doctorName:req.body.doctorName,
                speciality:req.body.speciality,
                paitentClinicalHistory:req.body.paitentClinicalHistory,
                treatmentsProcedures:req.body.treatment,
                diagnosisProvisional:req.body.diagnosisProvisional,
                notes:req.body.notes,
                treatment:req.body.treatment,
                investigation:req.body.investigation,
                reviewAdvise:req.body.reviewAdvise,
                amount:req.body.amount,
                consent:req.body.consent
        }
            console.log(req.body._id);
            patientModel.findByIdAndUpdate(req.body._id,updatePatient, (err) => res.send({"message":"updated"}))
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
