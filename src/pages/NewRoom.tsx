import { Link, useHistory } from 'react-router-dom';

import {FormEvent, useState} from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/moplan.svg';


import '../styles/auth.scss';

import { Button } from '../components/button';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';


export function NewRoom(){

    const { user } = useAuth()
    const [newRoom, setNewRoom] = useState('');
    const history = useHistory();

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault();

        if (newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,

        });

        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return(
        <div id="page-auth">

            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Plataforma completa</strong>
                <p>Serviço para corretora de ponta a ponta</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Moplan" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>

                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>

        </div>
    )
}