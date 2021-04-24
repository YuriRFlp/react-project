import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    background-color: #274360;
    border-radius: 5px;
    color: #fff;
    padding: .5rem 1rem;
    text-transform: uppercase;
    font-weight: 600;
    text-shadow: 1px 1px .5px #000;
    margin: 1rem 0 .5rem 0;

    @media (min-width: 38rem){
        align-self: start;
    }
`;

export default Button;