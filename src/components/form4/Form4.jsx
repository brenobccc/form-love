import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './Form4.css';
export default function Form4(){  
    let navigate = useNavigate();  
    return (<div className="form4-background">
            <div id="form4-form">
                <div id="form4-form-part1">
                
                </div>
                <div id="form4-form-part2">
                    <div id="form4-parte2-box1">
                        <p>4. Vc vai ser paciente comigo e não gritar comigo  e sempre conversa quando a gente tiver um problema? </p>
                        <div id="form4-botoes">
                            <div id="form4-botoes-box1">

                            </div>
                            <div id="form4-botoes-box2">

                            </div>
                        </div>
                    </div>
                    <div id="form4-parte2-box2">

                    </div>
                    <div id="form4-parte2-box3">

                    </div>
                </div>
                <div id="form4-form-part3">
                    <buttom onClick={()=>{
                        navigate('/splash-screen');
                    }}>
                        Próximo
                    </buttom>                   
                </div>
                
            </div>
    </div>)
}