import { useState } from 'react';
//import './App.css'
import './styles/hexMenu.css'
import HexMenu from './components/hexMenu';
import Dashboard from './components/dashboard'

import constants from './arrays/menu';



function App() {
  const [menuState,SetMenu] = useState(constants.Init)
  const [codeState,SetCode] =useState(false)
  const [codePyState,SetCodePy] =useState(false)
  const [codeJsState,SetCodeJs] =useState(false)
  const [codeDbState,SetCodeDb] =useState(false)
  const handlerMenu = (ownId)=>{
    if(ownId===0){
      SetMenu(constants.Init)
      SetCode(false)
      SetCodePy(false)
      SetCodeJs(false)
      SetCodeDb(false)
    }
    if (ownId ===3 & (!codeState)){
      SetCode(!codeState)
      SetMenu(constants.Code)
    }
    if (ownId ===3 & (codeState)){
      SetCode(!codeState)
      SetMenu(constants.Init)
      if(codePyState){SetCodePy(!codePyState)}
    }
    if (ownId ===4 & (codeState) & (!codePyState) & (!codeDbState) & (!codeJsState)){
      SetCodePy(!codePyState)
      SetMenu(constants.Python)
    }
    if (ownId ===4 & (codePyState)){
      SetCodePy(!codePyState)
      SetMenu(constants.Code)
    }
    if (ownId ===6 & (codeState) & (!codeJsState) & (!codePyState) & (!codeDbState)){
      SetCodeJs(!codeJsState)
      SetMenu(constants.Javascript)
    }
    if (ownId ===6 & (codeJsState)){
      SetCodeJs(!codeJsState)
      SetMenu(constants.Code)
    }

    if (ownId ===7 & (codeState) & (!codeJsState) & (!codePyState) & (!codeDbState)){
      SetCodeDb(!codeDbState)
      SetMenu(constants.Database)
    }
    if (ownId ===7 & (codeDbState)){
      SetCodeDb(!codeDbState)
      SetMenu(constants.Code)
    }


    
  }
  return (
    <div className="App">
      <HexMenu 
      data = {menuState}
      handlerMenu = {handlerMenu}
      />
      <Dashboard/>
    </div>
  );
}

export default App;
