import React from 'react';
import Animations from './Animations';
import CssModules from './CssModules';
import Frameworks from './Frameworks';
import StyledComponents from './StyledComponents';
import './css/App.css';

export default function App() {
  const [isAtivo, setAtivo] = React.useState(false);
  
  return (
    <div className="animeLeft">
      <h1>CSS com React</h1>


      <CssModules />
      <StyledComponents />
      <Frameworks />
      
      <button onClick={() => setAtivo(!isAtivo)}>Ativar componente animado</button>
      {isAtivo && <Animations />}
    </div>
  );
}


