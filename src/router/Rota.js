
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Form1 from '../components/form1/Form1';
// import Form2 from '../components/form2/Form2';
// import Form3 from '../components/form3/Form3';
// import Form4 from '../components/form4/Form4';
import React from 'react';
import Formpedido from '../components/form-final/Formpedido';
import Form2 from '../components/form2/Form2';
import Form3 from '../components/form3/Form3';
import Form4 from '../components/form4/Form4';
import Telasplash from '../components/Telasplash';
function Rota() {
  return (
    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<Form1/>}></Route>
         <Route path="/form2" element={<Form2/>}></Route>
         <Route path="/form3" element={<Form3/>}></Route>
         <Route path="/form4" element={<Form4/>}></Route>
         <Route path="/splash-screen" element={<Telasplash/>}></Route>
         <Route path="/form-final" element={<Formpedido/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default Rota;

    //   <Switch>
    //     
    //     {/* <Route path="form-1.2" component={telas[1]}></Route>
    //     <Route path="form-1.3" component={telas[2]}></Route>
    //     <Route path="form-1.4" component={telas[3]}></Route> */}
    //   </Switch>
    // </Router>