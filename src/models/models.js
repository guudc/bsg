/* 
    This is a model function
    containing models to main components
    of the nptr payment system
*/

//Import the mongoose module
const mongoose = require('mongoose');
const schema = mongoose.Schema
const uuid = require('uuid')

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017/adm';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//creating Wallet, Payment and Swap database class
class _User{
    /*
        This class controls the wallet
        model database connection
    */
    model = null;
    constructor(){
        //initialize database schema
        this.model = mongoose.model('user', (new schema({
            id:String, email:String, password:String})))
    }

    create(param, func){
      /*
        This functions create a new wallet
        data and store in the database
        It returns the wallet Id
      */
       //create id
       let _id = uuid.v4();
       let mData = {id:_id, email:param.email, password:param.password}
       new this.model(mData)
       .save((err) =>{
           if(err) func({status:'error',msg:'Internal database error'})
           func({status:true}, _id) 
       })
     }
    get(id, func){
      /*
        This functions get a wallet
        data and store in the database
        It returns the wallet Json data
      */
          if(id){
           //find the request dat
            this.model.find({'email':id},(err, res) =>{
                if(err) func({status:'error',msg:'Internal database error'})
                if(res != null){
                     if(res.length > 0){
                        res = res[0]
                        let p = {
                            id:res.id,email:res.email, password: res.password
                        }
                        func({status:true}, p)
                     }
                    else{func({status:'error',msg:'No user found'})}
                }
                else{func({status:'error',msg:'No user found'})}
           })
           
       }
       else{
           //no request id found
           func({status:'error',msg:'No wallet id found'})
       }
    }
    
}
//create payment and wallet objects for exports
const _user = new _User() 
//exports modules
exports.userDb =  _user 