//controllers functions
const datas = require('../../data.js')
const abi = require('../Abi/abi.js')
const fetch = require('node-fetch');
const _user = require('../models/models.js').userDb;
const web3 = require('web3')
let _web3 = new web3(new web3.providers.HttpProvider(datas.rpc))

                
exports.register = (req, res) => {
    req = req.body; 
    if(req.email && req.password){
        //convert to lowercase
        req.email = req.email.toLowerCase();
        if(req.email != "" && req.pasword != ""){
            //first check if it exists
            //do the registering
            _user.get(req.email, function(status, e){
                //do the registering
                if(status.status == 'error'){
                    _user.create(req, function(status, e){
                        res.send({id:e, status:true})
                    })
                }
                else{res.send({status:false, msg:'Already registered'})}
            })
            
        }
        else{res.send({status:false, msg:'Email or Password empty'})}
    }
    else{res.send({status:false, msg:'Email or Password not found'})}
}
exports.login = (req, res) => {
    req = req.body; 
    if(req.email && req.password){
        //convert to lowercase
        req.email = req.email.toLowerCase();req.password = req.password.toLowerCase();
        if(req.email != "" && req.pasword != ""){
            //first check if it exists
            //do the registering
            _user.get(req.email, function(status, e){
                //do the registering
                if(status.status == 'error'){
                    res.send({status:false, msg:'User not registered'})
                }
                else{
                    //check if password match
                    if(e.password == req.password){
                        res.send({status:true, id:e.id})
                    }
                    else{res.send({status:false, msg:'Incorrect password'})}
                }
            })
            
        }
        else{res.send({status:false, msg:'Email or Password empty'})}
    }
    else{res.send({status:false, msg:'Email or Password not found'})}
}
 




