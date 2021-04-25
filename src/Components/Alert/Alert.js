import { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button/Button';

const StyledAlert = styled.div`
    min-width: 14rem;
    background-color: #fff;
    border-radius: 10px;
    margin: 2rem 10%;
    text-align: left;
    position: relative;

    & h2{
        color: #fff;
        background-color: #274360;
        margin: 0;
        border-radius: 10px 10px 0 0;
        padding: .5rem 1rem;
    }

    & p{
        padding-left: 1rem;
        margin: 1.5rem 0 5rem 0;
    }

    & button{
        position: absolute;
        bottom: .5rem;
        right: 1rem;
    }
`;

const [error, setError] = useState([
    'Por favor, entre com a idade correta (0 {'<'} idade {'<'} 150)',
    'Por favor, preencha os campos de Usuário e Idade.'
]);

const Alert = (props) => {
    return(
        <StyledAlert>
            <h2>Entrada Inválida</h2>
            <p>{props.message}</p>
            <Button type="button">Ok</Button>
        </StyledAlert>
    )
}

export default Alert;