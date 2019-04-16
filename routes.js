const express = require('express');
const router = express.Router();
const helper=require('./helpers');
const db=require('./db');
router
    .get('/postdata',async (req,res) => {
        try {
          let data = await helper.postApplicantData(req);
          let count = Object.values(data['results'][0]['data']).length
          console.log(count)
          let Results={}
          for(let i=0;i<count;i++){
            Results[i]= data['results'][0]['data'][i]['row'][0];
            Technologies=Results[i]['Technologies'].split(",");
          }
          for(let i=0;i<Technologies.length;i++){
            query = 'Match (n:Technologies) where n.name = "'+Technologies[i]+'" return n';
            var j =  await db.doDatabaseOperation(query);
            console.log(j['data']);
          }
          
          res.send (Results)
        } catch (err) {
          res.send( err.message)
        }
      })
    .get('/getdata',async (req,res) => {
        try {
          let data = await helper.getApplicantData(req)
          // console.log(JSON.stringify(data))
          let count = Object.values(data['results'][0]['data']).length
          console.log(count)
          let Results={}
          for(var i=0;i<count;i++){
            Results[i]= data['results'][0]['data'][i]['row'][0]
          }
          //['data'][0]['meta']
          res.send (Results)
        } catch (err) {
          res.send( err.message)
        }
      });
module.exports = router;
