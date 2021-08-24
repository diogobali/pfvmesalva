import React, { useState } from 'react'
import './styles.scss';
// import nextStep from '../Signup';



const Step2 = ({ nextStep }) => {


    function refreshPage(){
        window.location.reload();   
    } 

    const Continue = (e) => {
        e.preventDefault();
        if(selectedType && totalAge && zone && hospitals && labs && illness){
            nextStep();
        } else {
            alert("Preencha todos os campos obrigatórios");
        }

    }

    const [selectedType, setSelectedType] = useState(null);

    const [totalAge, setTotalAge] = useState(null);
    const [firstAge, setFirstAge] = useState(0);
    const [secondAge, setSecondAge] = useState(0);
    const [thirdAge, setThirdAge] = useState(0);
    const [fourthAge, setFourthAge] = useState(0);
    const [fifthAge, setFifthAge] = useState(0);
    const [sixthAge, setSixthAge] = useState(0);
    const [seventhAge, setSeventhAge] = useState(0);
    const [eighthAge, setEighthAge] = useState(0);
    const [ninethAge, setNinethAge] = useState(0);

    const [zone, setZone] = useState(null);
    const [hospitals, setHospitals] = useState(null);
    const [labs, setLabs] = useState(null);
    const [illness, setIllness] = useState(null);

    const newTotalAge = () => {
        const total = parseInt(firstAge) + parseInt(secondAge) + parseInt(thirdAge) + parseInt(fourthAge) + parseInt(fifthAge) + parseInt(sixthAge) + parseInt(seventhAge) + parseInt(eighthAge) + parseInt(ninethAge)
        setTotalAge(total);
    }




    return(
        
            <div className="modal">
                <div className="container">
                    <div className="title">
                        <h1>Coleta de Informações</h1>
                    </div>

                    <div className="content">
                        <form>
                            <div>
                                <span>Tipo de Contrato (*):</span>
                                <select
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    value={selectedType}
                                >
                                    
                                    <option value="">Selecione...</option>
                                    <option value="adesao">Adesão</option>
                                    <option value="empresarial">Empresarial</option>
                                </select>
                            </div>

                            <div className="content--idades">
                                <span>Quantidade de vidas por faixa etaria:</span>
                                <div className="content--idades--in">
                                    <div>
                                        <span>0 a 18</span>
                                        <input 
                                            type="number" 
                                            id="idade_0_18" 
                                            min="0"
                                            value={firstAge}
                                            onChange={(e) => setFirstAge(e.target.value)}
                                            onBlur={newTotalAge}
                                        />
                                    </div>
                                    <div>
                                        <span>19 a 23</span>
                                        <input 
                                            type="number" 
                                            id="idade_19_23" 
                                            min="0"
                                            value={secondAge}
                                            onChange={(e) => setSecondAge(e.target.value)}
                                            onBlur={newTotalAge}
                                        />
                                    </div>
                                    <div>
                                        <span>24 a 28</span>
                                        <input 
                                            type="number" 
                                            id="idade_24_28" 
                                            min="0"
                                            value={thirdAge}
                                            onChange={(e) => setThirdAge(e.target.value)}
                                            onBlur={newTotalAge}
                                        />
                                    </div>
                                    <div>
                                        <span>29 a 33</span>
                                        <input 
                                            type="number" 
                                            id="idade_29_33" 
                                            min="0"
                                            value={fourthAge}
                                            onChange={(e) => setFourthAge(e.target.value)}
                                            onBlur={newTotalAge}
                                        />
                                    </div>
                                    <div>
                                        <span>34 a 38</span>
                                        <input 
                                            type="number" 
                                            id="idade_34_38" 
                                            min="0"
                                            value={fifthAge}
                                            onChange={(e) => setFifthAge(e.target.value)}
                                            onBlur={newTotalAge}
                                        />
                                    </div>
                                    <div>
                                        <span>39 a 43</span>
                                        <input 
                                            type="number" 
                                            id="idade_39_43" 
                                            min="0"
                                            value={sixthAge}
                                            onChange={(e) => setSixthAge(e.target.value)}
                                            onBlur={newTotalAge}
                                        />
                                    </div>
                                    <div>
                                        <span>49 a 53</span>
                                        <input 
                                            type="number" 
                                            id="idade_49_53" 
                                            min="0"
                                            value={seventhAge}
                                            onChange={(e) => setSeventhAge(e.target.value)}
                                            onBlur={newTotalAge}
                                        />
                                    </div>
                                    <div>
                                        <span>54 a 58</span>
                                        <input 
                                            type="number" 
                                            id="idade_54_58" 
                                            min="0"
                                            value={eighthAge}
                                            onChange={(e) => setEighthAge(e.target.value)}
                                            onBlur={newTotalAge}
                                        />
                                    </div>
                                    <div>
                                        <span>59+</span>
                                        <input 
                                            type="number" 
                                            id="idade_59" 
                                            min="0"
                                            value={ninethAge}
                                            onChange={(e) => setNinethAge(e.target.value)}
                                            onBlur={newTotalAge}
                                        />
                                    </div>
                                    <div>
                                        <span>Total</span>
                                        <input 
                                            type="number"
                                            id="idade_total" 
                                            min="0" 
                                            disabled
                                            value={totalAge} />
                                    </div>
                            </div>
                            </div>

                            <div>
                                <span>Bairro ou Zona (*):</span>
                                <input 
                                    type="text" 
                                    placeholder="Ipiranga ou Zona Sul"
                                    value={zone}
                                    onChange={(e) => setZone(e.target.value)}
                                 />
                            </div>

                            <div>
                                <span>Hospitais de Preferência (*):</span>
                                <input 
                                    type="text" 
                                    placeholder="Oswaldo Cruz"
                                    value={hospitals}
                                    onChange={(e) => setHospitals(e.target.value)}
                                 />
                            </div>

                            <div>
                                <span>Laboratórios de Preferência (*):</span>
                                <input 
                                    type="text" 
                                    placeholder="Fleury" 
                                    value={labs}
                                    onChange={(e) => setLabs(e.target.value)}
                                />
                            </div>

                            <div>
                                <span>Doença Pré-existente (*):</span>
                                <input 
                                    type="text" 
                                    placeholder="Esôfagite"
                                    value={illness}
                                    onChange={(e) => setIllness(e.target.value)}
                                />
                            </div>
                            <div className="content-buttons">
                                <button type="button" className="btn-cancelar" onClick={ refreshPage }><img src="../../../btn-cancel.svg"></img> </button>
                                <button type="submit" className="btn-confirmar" onClick={Continue}><img src="../../../btn-confirm.svg" alt="Botão de confirmar"></img></button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Step2;