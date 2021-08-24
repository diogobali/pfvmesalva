import React from 'react';
import { Modal as ModalComponent1 } from 'antd';
import { useModalContext1 } from './modal1.context'
import Signup from '../Signup';

import Step2 from '../step2';

import './styles.scss';

const Modal1 = () => {
    const { 
        modal1State: { message, visible }, 
    } = useModalContext1();

    if(!visible) return null;

    return(
        <ModalComponent1 
            visible={visible}
        >
            <Signup />
        </ModalComponent1>
    )
}

export default Modal1;