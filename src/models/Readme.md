Readme

    This modules contains model for swap, payment and wallet db
    
    
    All the callback uses the pattern
    callback(status:Json, result)
    where the status is in the format {status:true|'error', msg:<error message>}
        
            
    Wallet Model
        
        create(callback)
            Creates a new wallet instance  
            returns the uuid v4 of the wallet id, this is needed to modify this wallet
            object and to get the object
            
        get(id, callback)
            To fetch an existing wallet instance using its uuid v4 Id
            returns a wallet Json data
    
    
    Payment Model
        
        create(id, transfer callback)
            Creates a new payment instance using the payment id and transfer status as arguements
            returns the uuid v4 of the payment, this is needed to modify this payment
            object and to get the object
            
            
        get(id, callback)
            To fetch an existing Payment instance using its uuid v4 Id
            returns a Payment Json data
            
    
    Swap Model
        
        create(id, callback)
            Creates a new Swap instance using the swap id arguements
            returns the uuid v4 of the swap, this is needed to modify this swap
            object and to get the object
            
        save(params, callback)
            Modifies an existing swap instance,
            params include {status:String, tx:String}
            returns a swap Json
            
        get(id, callback)
            To fetch an existing swap instance using its uuid v4 Id
            returns a swap Json data
            
    
    
Database schema

    Wallet
        {
            id: uuid v4 String,
            address: String,
            key: String
        }
        
    Payment
        {
            id:uuid v4 String,
            transfer: String,
        }
    Swap
        {
            id:uuid v4 String,
            tx: String
            
        }