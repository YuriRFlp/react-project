import styled from 'styled-components';
import Button from '../UI/Button/Button';

const Li = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    background-color: #ccc;
    padding: .5rem;
    margin: 1rem;
`;

const ListItems = (props) => {
    const saveCardItemHandler = (event) => {
        const cardItemClicked = event.target.parentNode;
        props.onLifting(cardItemClicked);
    }

    return(
        <Li id={props.id}>
            <p>{props.user}</p>
            <p>{props.years} anos</p>
            <p>{props.nationality}</p>
            <Button type="button" onClick={saveCardItemHandler}>Excluir</Button>
        </Li>
    )
}

export default ListItems;