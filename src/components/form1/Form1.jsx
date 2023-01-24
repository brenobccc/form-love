import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './Form1.css';
export default function Form1(){  
    let navigate = useNavigate();  
    return (<div className="form1-background">
            <div id="form1-form">
                <div id="form1-form-part1">
                <p>Este é um formulário bastante importante para as cenas do próximo capítulo.....

                Preencha com atenção e de <b>Coração Aberto:</b></p>
                </div>
                <div id="form1-form-part2">
                    <div id="form1-parte2-box1">
                        <p>1. Vc aceita minhas raivas minha cara de abusado e minhas chatice quando tô jogando vídeo game? </p>
                        <div id="form1-botoes">
                            <div id="form1-botoes-box1">

                            </div>
                            <div id="form1-botoes-box2">

                            </div>
                        </div>
                    </div>
                    <div id="form1-parte2-box2">

                    </div>
                    <div id="form1-parte2-box3">

                    </div>
                </div>
                <div id="form1-form-part3">
                    <buttom onClick={()=>{
                        navigate('/form2');
                    }}>
                        Próximo
                    </buttom>                   
                </div>
                
            </div>
    </div>)
}