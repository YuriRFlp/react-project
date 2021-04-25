import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    background-color: #274360;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: .3rem .8rem;
    text-transform: uppercase;
    text-shadow: 1px 1px .5px #000;
    margin: 1rem 0 .5rem 0;

    &:hover{
        background-color: rgba(39,67,96, .8);
    }

    &:focus{
        outline: none;
        box-shadow: 0 0 0 1px #274360;
    }

    @media (min-width: 38rem){
        align-self: start;
    }
`;

export default Button;