import React from 'react';
import Header from './Header/Header';
import Productos from './Productos/Productos';
import Cuenta from './Cuenta/Cuenta';
import Token from './Token/Token';



const Seguridad = () => (
  <div>
    <Header title="Seguridad"></Header>
    <Productos></Productos>
    <Cuenta></Cuenta>
    <Token></Token>
  </div> 
)
export default Seguridad;
