import React from 'react';
import Animations from './Animations';
import CssModules from './CssModules';
import Frameworks from './Frameworks';
import StyledComponents from './StyledComponents';
import './css/App.css';
import Slide from './Slide';

export default function App() {
  const [isAtivo, setAtivo] = React.useState(false);

  const slides =  [
    {
      id: "slide1",
      text: "Slide1"
    },

    {
      id: "slide2",
      text: "Slide2"
    },

    {
      id: "slide3",
      text: "Slide3"
    }
  ]
  
  return (
    <div className="animeLeft">
      <h1>CSS com React</h1>


      <CssModules />
      <StyledComponents />
      <Frameworks />
      
      <button onClick={() => setAtivo(!isAtivo)}>Ativar componente animado</button>
      {isAtivo && <Animations />}

      <Slide slides={slides}/>
    </div>
  );
}


