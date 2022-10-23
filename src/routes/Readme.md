Readme

    This is a dcoumentation for the routes
    
    All returned result are in this Json format
    
    {
        status<boolean|string>:true|false|'error',
        msg<string>: Error message if error occur,
        data<json>: Json result data
    }
    existing route
         
         /pay
            This route starts a new card payment
            It returns a payment id, that can be used to ttrack card payment status
        
        /verifypay
            This route gets a card payment request
            expected arguements
            {id:uuid v4 Payment id}
            returns back the Payment data
       
       /newuser
            This route creates a new user wallet
            returns back a wallet id
            
       /getuser
            This route returns back a user wallet data
            expected arguements
            {walletId: uuid v4 Wallet Id}
        
        /finishpayment
            This route completes the card payment process
            expected arguements
            {walletId: uuid v4 Wallet Id, paymentId: uuid v4 Payment Id}
            returns a payment data
            
        /swap
            This route initiate native token swap
            expected arguements
            {walletId: uuid v4 Wallet Id, amount: (usd) to swap}
            returns a Swap id which can be used to monitor Swap request
            
        /getswap
            This route returns a swap request data
            expected parametres
            {id: uuid v4 Swap id}
            returns Swap request data
            
        /swapamount
            This route returns the amount in native token that would be gotten
            if the provided amount of usd was swapped
            expected parametres
            {amount: usd amount}
            returns Native token amount
