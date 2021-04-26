import styled from 'styled-components';
import Users from './Components/Users/Users';
import List from './Components/List/List';
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
  const [userData, setUserData] = useState([]);

  const liftUsersStateHandler = (enteredData) => {
    setUserData( (prevUserData) => {
      return [...prevUserData, enteredData];
    });
  }

  const cleanUsersHandler = () => {
    setUserData([]);
  }
  
  const deleteCardItemHandler = cardItem => {
    let indCardItem;
    for(let i = 0; i < userData.length; i++){
      if(userData[i].id === cardItem.id){
        indCardItem = i;
      }
    }
    userData.splice(indCardItem, 1);
    setUserData( (prevUserData) => {
      return [...prevUserData];
    });
  }

  return (
    <AppContainer>
      <h1>Lista de Usuários</h1>
      <Users onLiftingState={liftUsersStateHandler} onCleanList={cleanUsersHandler}/>
      <List items={userData} onCleanUser={deleteCardItemHandler}/>
    </AppContainer>
  );
}

export default App;
