const db=require('./db');

const getApplicantData = async (req) => {
    var query="CREATE (n:Candidate {fullname:{fullname}}) RETURN n";
    param={fullname:'ananthu'}
    data= await db.doDatabaseOperation(query,param)
    return data
  }

const postApplicantData = async (req) => {
    var query="CREATE (n:Candidate {fullname:{fullname}}) RETURN n";
    param={fullname:'ananthu'}
	return await db.doDatabaseOperation(query,param)
  }

module.exports = {
    getApplicantData,
    postApplicantData
  }