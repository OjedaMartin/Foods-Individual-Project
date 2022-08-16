import React from "react"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import Home from './Components/Home.jsx';
import RecipeCreate from './Components/RecipeCreate'
import Detail from './Components/Detail'


function App() {
  return (
    
    <BrowserRouter>            
        <Routes>        
          <Route exact path='/' element={ <Landing/>}/> 
          <Route exact path='/Home' element={ <Home/>}/>  
          <Route exact path='/recipesform' element={ <RecipeCreate/>}/>  
          <Route exact path='/recipes/:id' element={ <Detail/>}/>      
        </Routes>     
    </BrowserRouter> 
    
  );
}

export default App;
