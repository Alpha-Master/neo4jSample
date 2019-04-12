const express = require('express');
const router = express.Router();
const helper=require('./helpers');
router
    .post('/postdata',async (req,res) => {
        try {
          let data = await helper.postApplicantData(req)
          console.log(JSON.stringify(data))
          res.send (data['results'])
        } catch (err) {
          res.send( err.message)
        }
      })
    .get('/getdata',async (req,res) => {
        try {
          let data = await helper.getApplicantData(req)
          console.log(JSON.stringify(data))
          res.send (data['results'])
        } catch (err) {
          res.send( err.message)
        }
      });
module.exports = router;