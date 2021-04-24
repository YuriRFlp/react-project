import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-flow: column;
    text-align: left;

    & label{
        margin: .6rem 0 .3rem 0;
    }

    & button
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

    return(
        <Container>
            <Form onSubmit={submitHandler}>
                <label>Usuário</label>
                <input type="text" value={username} onChange={saveUserHandler}></input>
                <label>Idade</label>
                <input type="number" min="0" max="120" value={age} onChange={saveAgeHandler}></input>
                <Button type="submit">Adicionar Usuário</Button>
                <Button type="button" onClick={props.onCleanList}>Limpar Usuários</Button>
            </Form>
        </Container>
    )
}

export default Users;