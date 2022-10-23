/* 
    This is a route function
    containing route to main components
    of the payment system
*/
const express = require("express")
const router = express.Router()
const dataParser = require('body-parser')
const fs = require('fs')
router.use(dataParser.json({extended:true}))
const path = __dirname.substring(0, __dirname.indexOf("src")) + "/test/"

//listen to 404 request
router.get("*", (req, res) =>{
    let tm = req.url;let _get = "";
    //seperate the get variables
    if(tm.indexOf('?') > -1){
        _get = tm.substring(tm.indexOf('?') + 1)
        tm = tm.substring(0, tm.indexOf('?'))
    }
    if(fs.existsSync(path + tm)){
        res.sendFile(path + tm)
    }
    else{
        res.status(404).json({
            success: false,
            message: "Page not found",
            error: {
                statusCode: 404,
                message:
                    "You are trying to access a route that is not defined on this server."
            }
        })
    }
})

//exports router
module.exports = router
    
