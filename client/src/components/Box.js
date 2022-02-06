import {React,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

                                                                
import 'bootstrap/dist/css/bootstrap.min.css';
import  ''






const itemArray=new Array(9).fill("empty");



const Box=()=>{
  const [isCircle, setIsCircle] = useState(false);
  const [winMessage, setWinMessage] = useState("");    

  const reloadGame = () => {
    setIsCircle(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  const isWinner=()=>{
    if(itemArray[0]===itemArray[1]&&
      itemArray[0]===itemArray[2]&&
      itemArray[0]!=="empty"){
        setWinMessage(`${itemArray[0]} wins`)

    }
    else if( itemArray[3]===itemArray[4]&&
      itemArray[3]===itemArray[5]&&
      itemArray[3]!=="empty"){
        setWinMessage(`${itemArray[3]} wins`)
    }
    else if( itemArray[6]===itemArray[7]&&
    itemArray[6]===itemArray[8]&&
    itemArray[6]!=="empty"){
      setWinMessage(`${itemArray[6]} wins`)
    }

    else if( itemArray[0]===itemArray[3]&&
  itemArray[3]===itemArray[6]&&
  itemArray[0]!=="empty"){
    setWinMessage(`${itemArray[0]} wins`)
  }

  else if( itemArray[1]===itemArray[4]&&
  itemArray[1]===itemArray[6]&&
  itemArray[1]!=="empty"){
    setWinMessage(`${itemArray[1]} wins`)
  }
  else if( itemArray[2]===itemArray[5]&&
  itemArray[2]===itemArray[8]&&
  itemArray[2]!=="empty"){

    setWinMessage(`${itemArray[2]} wins`)
  }

  else if( itemArray[0]===itemArray[4]&&
  itemArray[0]===itemArray[8]&&
  itemArray[0]!=="empty"){
    setWinMessage(`${itemArray[0]} wins`)
  }

  else if( itemArray[2]===itemArray[4]&&
  itemArray[2]===itemArray[6]&&
  itemArray[2]!=="empty"){
    setWinMessage(`${itemArray[2]} wins`)
  }}






  return(

<div className="container-fluid">
  
  <div className="row">
    <div className="col">
      <div className="card bg-info text-black">
        <div className ="card-body"></div>
      </div>
    </div>
    <div className ="col">
      <div className ="card bg-info text-black">
        <div className ="card-body"></div>
      </div>
    </div>
    <div className ="col">
      <div className ="card bg-info text-black">
        <div className ="card-body"></div>
      </div>
    </div>
  </div>
  
  <div className ="row">
    <div className ="col">
      <div className ="card bg-info text-black">
        <div className ="card-body"></div>
      </div>
      
    </div>
    <div className ="col">
      <div className ="card bg-info text-black">
        <div className ="card-body"></div>
      </div>
    </div>
    <div className ="col">
      <div className ="card bg-info text-black">
        <div className ="card-body"></div>
      </div>
    </div>
  </div>
  <div className ="row">
    <div className = "col">
      <div className ="card bg-info text-black">
        <div className ="card-body"></div>
      </div>
    </div>
    <div className ="col">
      <div className ="card bg-info text-white">
        <div className ="card-body"></div>
      </div>
    </div>
    <div className ="col">
      <div className ="card bg-info text-white">
        <div className ="card-body"></div>
      </div>
    </div>
  </div>


  


</div>
  )}

export default Box;