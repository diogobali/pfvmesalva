import React, { useState } from 'react';
import { Modal as ModalComponent } from 'antd';
import { useModalContextSendAdm } from './modalSendAdm.context'

const ModalSendAdm = () => {
    const {
        modalSendAdmState: { visible, itemId }, 
    } = useModalContextSendAdm();


    function refreshPage(){
        window.location.reload();
    } 
    
    console.log(itemId);

    return(
        <ModalComponent
            visible={visible}
        >
            <div className="modal">
                <div className="container">
                    <div className="title">
                        <h1>Anexar Documentação</h1>
                    </div>
                    <div className="content">
                        <form method="post" action="http://localhost/attachdocuments.php" enctype="multipart/form-data">
                        <div>
                            {itemId &&
                                <input 
                                    name="lead_id"
                                    type="text"
                                    value={itemId} 
                                    style={{display:'none'}}
                                />
                            }
                            <span>Anexe todos os documentos necessários</span>
                            <input 
                                type="file"
                                multiple 
                                accept=".zip,.rar,.jpg,.jpeg,.png,.pdf"
                                id="selectfile"
                                name="arquivo[]"
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
        </ModalComponent>
    )
}

export default ModalSendAdm;