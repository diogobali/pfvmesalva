import React, { useState, useEffect } from 'react';
import { Modal as ModalComponent } from 'antd';
import { useModalContextInfo } from './modalInfo.context'
import './styles.scss';



const ModalInfo = () => {
    const { 
        modalInfoState: { message, visible, itemId, status }, 
        closeModalInfo,
    } = useModalContextInfo();

    

    function refreshPage(){
        window.location.reload();
    } 


    

    const [infos, setInfos] = useState({});
    const optionsForm = {
        method: 'POST',
        body: JSON.stringify({
            leadId: itemId,
            status: status
        })
    };  

    

    useEffect(async () => {
        fetch("http://localhost/getleadinfo.php", optionsForm)
        .then((response) => response.json())
        .then((responseJson) => {
            setInfos(Object.values((responseJson)))
            console.log("dada");
            console.log(infos);
        })
    }, [])


    
    if(!visible) return null;

 


    return( 
        <ModalComponent
            visible={visible}
        >
            <div className="modal">
                <div className="container">
                    <div className="title">
                        <h1>Informações</h1>
                    </div>

                    <div className="content">
                        <form>
                        <div className="infos-final">
                            <div>
                                {JSON.stringify(infos)}
                                <span>ID:</span>
                                {infos[0] && infos[0].id }
                            </div>
                            <div>
                                <span>Nome:</span>
                                {infos[0] && infos[0].nome }
                            </div>
                            <div>
                                <span>Forma de contato:</span>
                                {infos[0] && infos[0].contactway }
                            </div>
                             
                            
                            
                        </div>
                        
                        <div className="content-buttons">
                            <button type="button" className="btn-cancelar" onClick={refreshPage}><img src="../../../btn-cancel.svg"></img> </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </ModalComponent>
    )
}



export default ModalInfo;