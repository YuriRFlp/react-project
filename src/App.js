import styled from 'styled-components';
import Users from './Components/Users/Users';
import Card from './Components/Card/Card';
import { useState } from 'react';

const AppContainer = styled.div`
  display: grid;
  text-align: center;

  & h1{
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 0;
  }
`;

const App = () => {
  const [arrData, setArrData] = useState([]);

  const liftUsersStateHandler = (enteredData) => {
    setArrData( (prevArrData) => {
      return [enteredData, ...prevArrData];
    });
  }

  const cleanUsersHandler = () => {
    setArrData([]);
  }
  
  const deleteCardItemHandler = cardItem => {
    let indCardItem;
    for(let i = 0; i < arrData.length; i++){
      if(arrData[i].id === cardItem.id){
        indCardItem = i;
      }
    }
    arrData.splice(indCardItem, 1);
    setArrData( (prevArrData) => {
      return [...prevArrData];
    });
  }

  return (
    <AppContainer>
      <h1>Lista de Usuários</h1>
      <Users onLiftingState={liftUsersStateHandler} onCleanList={cleanUsersHandler}></Users>
      <Card items={arrData} onCleanUser={deleteCardItemHandler}></Card>
    </AppContainer>
  );
}

export default App;
