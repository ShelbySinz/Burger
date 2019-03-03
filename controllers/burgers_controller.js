var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");



router.get("/" ,function (req, res) {
  burger.selectAll(function(data){
      var hbsobj = {
          burgers: data
      };
      console.log(hbsobj);
      res.render("index", hbsobj);
  })
});

router.post("/burgers", function(req, res){
    burger.insertOne([
        "BurgerName", "devoured"
    ],[
     req.body.BurgerName, req.body.devoured
    ],function(result){
        res.json({id: result.insertId});
    });
});

router.put("/burgers/:id", function(req, res){
    console.log(req.body);
    var condition = "id = " + req.params.id;
    
    burger.updateOne({ devoured: req.body.devoured 
    
    },condition, function(result) {
        
        console.log(result);
        if (result.chagnedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        
        }
        
    });
    });

    router.delete("/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;
      
        burger.delete(condition, function(result) {
          if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });










    //     var condition = "id = " + req.params.id;
//     console.log("condition", condition);
//     console.log(req.body);
//     burger.updateOne({
//         devoured : req.body.devoured
//     }. condition, function(result){
//         if(result.changedRows == 0){
//             return res.status(404).end();
//         } else {
//           res.status(200).end();
//         }
    
        
//     });
// })








module.exports = router;