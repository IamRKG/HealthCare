const repository = require("./repository")

const patientController = function() {
    this.getRepoAllPatient = function(req,res){
            repository.getAllPatient(req,res);
    }

    this.getRepoPatientById = function(req,res){
        repository.getPatientById(req,res);  
    }

    this.repoSavePatient = function(req,res){
        repository.savePatient(req,res);  
    }

    this.repoUpdatePatient = function(req,res){
        repository.updatePatient(req,res);  
    }

    this.repoSearch = function (req,res) {
        repository.search(req,res)
    }

    this.repoDeletePatient = function (req,res) {
        repository.deletePatient(req,res)
    }
}

module.exports = new patientController;