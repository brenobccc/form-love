import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './Form2.css';
export default function Form2(){  
    let navigate = useNavigate();  
    return (<div className="form2-background">
            <div id="form2-form">
                <div id="form2-form-part1">
                
                </div>
                <div id="form2-form-part2">
                    <div id="form2-parte2-box1">
                        <p>2. Vc me aceitar mesmo sabendo que ainda não tenho o trabalho para lhe tratar como uma rainha que vc merece? </p>
                        <div id="form2-botoes">
                            <div id="form2-botoes-box1">

                            </div>
                            <div id="form2-botoes-box2">

                            </div>
                        </div>
                    </div>
                    <div id="form2-parte2-box2">

                    </div>
                    <div id="form2-parte2-box3">

                    </div>
                </div>
                <div id="form2-form-part3">
                    <buttom onClick={()=>{
                        navigate('/form3');
                    }}>
                        Próximo
                    </buttom>                   
                </div>
                
            </div>
    </div>)
}