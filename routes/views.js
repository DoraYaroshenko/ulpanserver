const express = require("express");
const { ViewModel } = require("../models/viewModel");
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let view = await ViewModel.findOne({_id:"653e9b842a318982ff0373d1"});
    res.json(view.views);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
}) 

router.patch("/increase", async (req, res) => {
    try {
      const views = await ViewModel.findById({_id:"653e9b842a318982ff0373d1"});
      if (!views) {
        return res.status(404).json({ error: "View not found" });
      }
      else{
        const data = await ViewModel.updateOne({_id:"653e9b842a318982ff0373d1"}, {views:(views.views+1)});
        res.json(data);
      }  
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  });

  module.exports = router;