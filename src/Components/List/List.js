import styled from 'styled-components';
import Container from '../UI/Container/Container';
import ListItems from './ListItems';

const Ul = styled.ul`
    padding: 0;
`;

const List = (props) => {
    const liftCardItem = cardItem => {
        props.onCleanUser(cardItem);
    }

    if(props.items.length === 0){
        return(
            <Container>
                <p>Nenhum usuário cadastrado</p>
            </Container>
        )
    }

    return(
        <Container>
            <Ul>
                {props.items.map( obj => (
                    <ListItems 
                        key={obj.id}
                        id={obj.id}
                        onLifting={liftCardItem}
                        user={obj.user}
                        years={obj.years}
                        nationality={obj.nationality}>
                    </ListItems>
                ))}
            </Ul>
        </Container>
    )
}

export default List;