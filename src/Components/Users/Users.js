import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import { Fragment, useState } from 'react';
import styled from 'styled-components';
import Alert from '../UI/Alert/Alert';

const Form = styled.form`
    display: flex;
    flex-flow: column;

    & div{
        display: flex;
        flex-flow: column;
    }

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

    @media (min-width: 38rem){
        flex-flow: row;
        justify-content: space-around;

        & div{
            width: 50%;
        }

        & div:nth-child(2){
            padding-top: 2.5rem;
        }
    }
`;

const Users = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [nationality, setNationality] = useState('');
    const [error, setError] = useState();

    const saveUserHandler = (event) => {
        setUsername(event.target.value);
    }
    
    const saveAgeHandler = (event) => {
        setAge(Number(event.target.value));
    }

    const saveNationalityHandler = (event) => {
        setNationality(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        if(username.trim().length === 0 || age.length === 0 || nationality.trim().length === 0){
            setError({
                title: "Entrada Inválida",
                message: "Por favor, preencha todos os campos."
            });
            return;
        };

        if(age <= 0 || age > 150){
            setError({
                title: "Idade Inválida",
                message: "Por favor, entre com a idade correta (0 < idade < 150)."
            });
            return;
        };
    
        const enteredData = {
            id: Math.random().toString(),
            user: username,
            years: age,
            nationality: nationality
        }

        props.onLiftingState(enteredData);
    
        setUsername('');
        setAge('');
        setNationality('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return(
        <Fragment>
            {error && <Alert title={error.title} message={error.message} onClick={errorHandler}></Alert>}
            <Container>
                <Form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">Usuário</label>
                        <input id="username" type="text" value={username} onChange={saveUserHandler}/>
                        <label htmlFor="age">Idade</label>
                        <input id="age" type="number" value={age} onChange={saveAgeHandler}/>
                        <label htmlFor="nationality">Nacionalidade</label>
                        <input id="nationality" type="text" value={nationality} onChange={saveNationalityHandler}/>
                    </div>
                    <div>
                        <Button type="submit">Adicionar Usuário</Button>
                        <Button type="button" onClick={props.onCleanList}>Limpar Usuários</Button>
                    </div>
                </Form>
            </Container>
        </Fragment>
    )
}

export default Users;