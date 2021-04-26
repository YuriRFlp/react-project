import styled from 'styled-components';
import Button from '../Button/Button';

const StyledAlert = styled.div`
    min-width: 14rem;
    width: 60%;
    background-color: #fff;
    border-radius: 10px;
    margin: 2rem 10%;
    text-align: left;
    position: fixed;
    top: 30vh;
    left: 10%;
    z-index: 2;
    overflow: hidden;

    & h2{
        color: #fff;
        background-color: #274360;
        margin: 0;
        border-radius: 10px 10px 0 0;
        padding: 1rem;
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

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0,0,0, .8);
`;

const Alert = (props) => {
    return(
        <BackDrop>
            <StyledAlert>
                <h2>{props.title}</h2>
                <p>{props.message}</p>
                <Button type="button" onClick={props.onClick}>Ok</Button>
            </StyledAlert>
        </BackDrop>
    )
}

export default Alert;