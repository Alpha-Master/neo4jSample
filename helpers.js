const db=require('./db');

const getApplicantData = async (req) => {
    var query="Match (n) Return n";
    data= await db.doDatabaseOperation(query)
    return data
  }

const postApplicantData = async (req) => {
    var query="CREATE (n:Candidate {fullname:{fullname},Phone_No:{Phone_No},Email_Id:{Email_Id},DOB:{DOB},Current_organization:{Current_organization},Skill:{Skill},Educational:{Educational},Designation:{Designation},Experience:{Experience},Current_CTC:{Current_CTC},Expected_CTC:{Expected_CTC},Notice_Period:{Notice_Period},Current_Location:{Current_Location},Job_Location:{Job_Location},Vendor_name:{Vendor_name},Passport:{Passport},Visa:{Visa},Pan_Card:{Pan_Card},Technologies:{Technologies}}}) RETURN n";
    param={fullname:'Aashish K Goyal',Phone_No:7222000769,Email_Id:'sudheesh.reddy@versa-networks.com',DOB:'1997-09-03',Current_organization:'CSS Corp',Skill:'Senior System Engineer',Educational:'B.Tech',Designation:'Senior Network Specialist',Experience:'13 Yrs',Current_CTC:'17.20 L',Expected_CTC:'26 L (Holding offer 22 L)',Notice_Period:'Serving,LWD: 4th June 19',Current_Location:'Chennai',Job_Location:'Chennai',Vendor_name:'Orion',Passport:'Yes',Visa:'Yes',Pan_Card:'1234567890',Technologies:'React Js,Node Js,Nginx,Java,C,C++'};
	return await db.doDatabaseOperation(query,param)
  }

module.exports = {
    getApplicantData,
    postApplicantData
  }