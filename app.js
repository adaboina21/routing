var express = require('express');
brnv = require('bank-routing-number-validator');
var aba_validator = require("ABAValidator").ABAValidator;
//brnv.ABARoutingNumberIsValid('1234567890'); //false
//brnv.ABARoutingNumberIsValid('021000021') ;//true
var app = express();app.get('/', function (req, res) {
   var id = req.query.id;
   console.log(id);
    var isvalidrouting = aba_validator.validate(id);
   // var isvalidrouting= brnv.ABARoutingNumberIsValid(id); //false
    console.log(isvalidrouting);
    if(isvalidrouting){
        res.send("Routing Number Is Valid");
    }else{
        res.send("Routing Number Is Not Valid");
    }

});app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
