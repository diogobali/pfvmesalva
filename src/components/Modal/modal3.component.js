import React, { useState } from 'react';
import { Modal as ModalComponent3 } from 'antd';
import { useModalContext3 } from './modal3.context'

const Modal3 = () => {
    const { 
        modal3State: { visible, itemId }, 
    } = useModalContext3();

    function refreshPage(){
        window.location.reload();
    } 

    const [formInfo, setFormInfo] = useState({
        operadora: '',
        plano: '',
        cobertura: '',
        coparticipacao: '',
        valorMin: '',
        valorMax: '',
        primeiroretorno: '',
    });

    const valorInput = e => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })

    const sendForm = (e) => {
        const lead = document.querySelector('.lead3').value
        console.log(lead)
        const optionsForm = {
            method: 'POST',
            body: JSON.stringify({  
                leadId: lead,
                operadora: formInfo.operadora,
                plano: formInfo.plano,
                cobertura: formInfo.cobertura,
                coparticipacao: formInfo.coparticipacao,
                valorMin: formInfo.valorMin,
                valorMax: formInfo.valorMax,
                primeiroretorno: formInfo.primeiroretorno,
            })
        };
        fetch('http://localhost/recieveform_orcamento.php', optionsForm)
        .then(function(response) {
            console.log(response)
        })

    }

    
    return(
        <ModalComponent3 
            visible={visible}
        >
            <div className="modal">
                <div className="container">
                    <div className="title">
                        <h1>Enviar Orçamento</h1>
                    </div>
                    <div className="content">
                        <form onSubmit={sendForm}>
                        <div>
                            {itemId &&
                                <input 
                                    className="lead3"
                                    type="text" 
                                    value={itemId} 
                                    style={{display:'none'}}
                                />
                            }
                            <span>Cliente Decidiu?</span>
                            <select
                                required
                                name="resultado"
                                onChange={valorInput}
                            >
                                <option value="">Selecione...</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div>
                            <span>Operadora: </span>
                            <input 
                                type="text"
                                placeholder="AMIL 300"
                                name="operadora"
                                onChange={valorInput}
                                required
                            ></input>
                        </div>
                        <div>
                            <span>Plano: </span>
                            <input 
                                type="text"
                                placeholder="Tipo de Cobertura"
                                name="plano"
                                onChange={valorInput}
                                required                                
                            ></input>
                        </div>
                        <div>
                            <span>Coparticipação: </span>
                            <select
                                required
                                name="coparticipacao"
                                onChange={valorInput}
                            >
                                <option value="">Selecione...</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div>
                            <span>Valor </span>
                            <div>
                                <input 
                                    type="text"
                                    placeholder="Valor Min"
                                    name="valorMin"
                                    onChange={valorInput}
                                    required
                                ></input>
                                <input 
                                    type="text"
                                    placeholder="Valor Max"
                                    name="valorMax"
                                    onChange={valorInput}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div>
                            <span>Data e horário para primeiro retorno</span>
                            <input
                                type="datetime-local"
                                name="date"
                                onChange={valorInput}
                                required
                            ></input>
                        </div>
                        <div className="content-buttons">
                            <button type="button" className="btn-cancelar" onClick={refreshPage}><img src="../../../btn-cancel.svg"></img> </button>
                            <button type="submit" className="btn-confirmar"><img src="../../../btn-confirm.svg" alt="Botão de confirmar"></img></button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </ModalComponent3>
    )
}

export default Modal3;