import Container from '../UI/Container/Container';
import CardItems from './CardItems';

const Card = (props) => {
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
            {props.items.map( (card) => (
                <CardItems 
                    key={card.id}
                    id={card.id}
                    onLifting={liftCardItem}
                    user={card.user}
                    years={card.years}>
                </CardItems>
            ))}
        </Container>
    )
}

export default Card;