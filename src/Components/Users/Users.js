import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import { useState } from 'react';
import styled from 'styled-components';
// import Alert from '../Alert/Alert';

const Form = styled.form`
    display: flex;
    flex-flow: column;
    text-align: left;

    & label{
        margin: .6rem 0 .3rem 0;
    }

    & input{
        border-radius: 5px;
        border: 1px solid #274360;
        padding: .5rem;

        &:focus{
            outline: none;
            box-shadow: 0 0 0 1px #274360;
        }
    }
`;

const Users = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const saveUserHandler = (event) => {
        setUsername(event.target.value);
    }
    
    const saveAgeHandler = (event) => {
        setAge(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredData = {
            id: Math.random().toString(),
            user: username,
            years: age
        }

        props.onLiftingState(enteredData);
    
        setUsername('');
        setAge('');
    }

    

    // if(username === undefined || age === undefined){
    //     return(
    //         <Alert message={errorMessage[1]}></Alert>
    //     )
    // }
    // if(age <= 0 || age > 150){
    //     return(
    //         <Alert message={errorMessage[0]}></Alert>
    //     )
    // }
    return(
        <Container>
            <Form onSubmit={submitHandler}>
                <label>Usuário</label>
                <input type="text" value={username} onChange={saveUserHandler} autoFocus required/>
                <label>Idade</label>
                <input type="number" min="0" max="150" value={age} onChange={saveAgeHandler} required/>
                <Button type="submit">Adicionar Usuário</Button>
                <Button type="button" onClick={props.onCleanList}>Limpar Usuários</Button>
            </Form>
        </Container>
    )
}

export default Users;