import React from "react";
import { Button } from "../Buttons/Button.styles";

const ConnectAlgoSigner = function (userAccount: any) {

    const connectAlgoSigner = async () =>{
        let resp = await AlgoSigner.connect()
        console.log(resp)
        getUserAccount()
      }
  
      const getUserAccount = async () =>{
         userAccount.current =  await AlgoSigner.accounts({
              ledger: 'TestNet'
            })
      // console.log(userAccount.current[0]['address'])
      console.log(userAccount.current)
  
      }
      return(
        <div>
          <Button onClick={connectAlgoSigner}>
          Connect AlgoSigner
          </Button>
        </div>
        
      )
}

export default ConnectAlgoSigner