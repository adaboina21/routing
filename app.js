var express = require('express');
brnv = require('bank-routing-number-validator');
//brnv.ABARoutingNumberIsValid('1234567890'); //false
//brnv.ABARoutingNumberIsValid('021000021') ;//true
var app = express();app.get('/', function (req, res) {
   var id = req.query.id;
    var isvalidrouting= brnv.ABARoutingNumberIsValid(id); //false
    if(isvalidrouting){
        res.send("Routing Number Is Valid");
    }else{
        res.send("Routing Number Is Not Valid");
    }

});app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
