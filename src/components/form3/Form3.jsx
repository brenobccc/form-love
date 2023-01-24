import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './Form3.css';
export default function Form3(){  
    let navigate = useNavigate();  
    return (<div className="form3-background">
            <div id="form3-form">
                <div id="form3-form-part1">
                
                </div>
                <div id="form3-form-part2">
                    <div id="form3-parte2-box1">
                        <p>3. Vc me aceita mesmo sendo mandão e chato quando estou sem paciência? </p>
                        <div id="form3-botoes">
                            <div id="form3-botoes-box1">

                            </div>
                            <div id="form3-botoes-box2">

                            </div>
                        </div>
                    </div>
                    <div id="form3-parte2-box2">

                    </div>
                    <div id="form3-parte2-box3">

                    </div>
                </div>
                <div id="form3-form-part3">
                    <buttom onClick={()=>{
                        navigate('/form4');
                    }}>
                        Próximo
                    </buttom>                   
                </div>
                
            </div>
    </div>)
}