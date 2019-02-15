const PatientConstructor = function (req) {

    const patient = {
      patientID:req.body.patientID,
      patientName:req.body.patientName,
      age:req.body.age,
      sex:req.body.sex,
      patientInTime:req.body.patientInTime,
      dob:req.body.dob,
      bloodGroup:req.body.bloodGroup,
      contactNo:req.body.contactNo,
      patientAddress:req.body.patientAddress,
      emailAddress:req.body.emailAddress,
      doctorName:req.body.doctorName,
      speciality:req.body.speciality,
      patientHeight:req.body.patientHeight,
      patientWeight:req.body.patientWeight,
      patientBP:req.body.patientBP,
      patientPulse:req.body.patientPulse,
      patientTemperature:req.body.patientTemperature,
      patientSPO:req.body.patientSPO,
      patientRP:req.body.patientRP,
      patientClinicalHistory:req.body.patientClinicalHistory,
      diagnosisProvisional:req.body.diagnosisProvisional,
      treatmentsProcedures:req.body.treatmentsProcedures,
      notes:req.body.notes,
      treatment:req.body.treatment,
      investigation:req.body.investigation,
      review:req.body.review,
      amount:req.body.amount
   };

   this.getPatientShape = function () {
        return patient;
   }
};

module.exports = PatientConstructor;
