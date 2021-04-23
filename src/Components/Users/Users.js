import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import { useState } from 'react';

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
            <form onSubmit={submitHandler}>
                <label>Usuário</label>
                <input type="text" value={username} onChange={saveUserHandler}></input>
                <label>Idade (anos)</label>
                <input type="text" value={age} onChange={saveAgeHandler}></input>
                <Button type="submit">Adicionar Usuário</Button>
            </form>
        </Container>
    )
}

export default Users;