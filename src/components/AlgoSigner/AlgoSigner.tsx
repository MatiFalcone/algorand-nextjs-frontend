import React, {useRef} from "react";
import ConnectAlgoSigner from "./ConnectAlgoSigner";
import SignPayTransaction from "./SignPayTransaction";
import algoSignerlogo from '../../assets/images/algosigner.jpeg'
import { AlgoSignerMain } from "./AlgoSigner.styles";
//import CreateAsset from "./CreateAsset";
//import AssetOptin from "./AssetOptin"

const AlgoSignerHTML =  ()  => {
    const userAccount = useRef()
    const receipient = useRef()
    const amount = useRef()

    return(
      
        <AlgoSignerMain>
            <ConnectAlgoSigner userAccount = {userAccount}/>           
        </AlgoSignerMain>
    )
}

export default AlgoSignerHTML
