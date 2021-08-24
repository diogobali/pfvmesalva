import React from 'react';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

export default function List({ title, data, index: listIndex, adm, sendAdm }){






    return(
        <Container adm={adm} sendAdm={sendAdm}>
            <header>
                <h2>{title}</h2>
            </header>
            <ul>
                { data.map((card, index) => {                    
                    if(card.status == listIndex){
                        return(
                        <Card 
                            key={card.id}
                            index={index} 
                            data={card}
                            listIndex={listIndex}
                            button={data?.button}
                            status={card.status} 
                            sendAdm={sendAdm}
                        />
                        )
                    }
                }
                )}  
            </ul>
        </Container>
    );
}