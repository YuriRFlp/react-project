import styled from 'styled-components';
import Button from '../UI/Button/Button';

const CardItemsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    background-color: #ccc;
    padding: .5rem;
    margin: 1rem;
`;

const CardItems = (props) => {
    const saveCardItemHandler = (event) => {
        const cardItemClicked = event.target.parentNode;
        props.onLifting(cardItemClicked);
    }

    return(
        <CardItemsContainer id={props.id}>
            <p>{props.user}</p>
            <p>{props.years} anos</p>
            <Button type="button" onClick={saveCardItemHandler}>Excluir</Button>
        </CardItemsContainer>
    )
}

export default CardItems;