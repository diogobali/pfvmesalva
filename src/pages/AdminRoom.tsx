

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/button';
import { RoomCode } from '../components/RoomCode';
import { useHistory, useParams } from 'react-router-dom';

import { useRoom } from '../hooks/useRoom';

import { Question } from '../components/Question'

import deleteImg from '../assets/images/delete.svg'


import '../styles/room.scss';
import '../styles/question.scss';
import { database } from '../services/firebase';

type RoomParams = {
    id: string;
}


export function AdminRoom(){
    // const { user } = useAuth();
    const history = useHistory();
    const params = useParams<RoomParams>();
    const RoomId = params.id;
    const { title, questions } = useRoom(RoomId);
    
    async function handleEndRoom(){
        await database.ref(`rooms/${RoomId}`).update({
            endedAt: new Date(),
        })


        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string){
       if (window.confirm('Você tem certeza que deseja excluir essa pergunta?')){
        await database.ref(`rooms/${RoomId}/questions/${questionId}`).remove();
       }

    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Moplan Plataform"/>
                    <div>
                        <RoomCode code={RoomId} />
                        <Button isOutlined
                            onClick={handleEndRoom}
                        >Encerrar Sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
                </div>


                <div className="question-list">
                    {questions.map(question =>{
                        return(
                        <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                        >
                            <button
                                type="button"
                                onClick={() => handleDeleteQuestion(question.id)}
                            >
                                <img src={deleteImg} alt="Remover pergunta"/>
                            </button>

                        </Question>  
                        );
                    })}
                </div>

            </main>

        </div>
    );
}