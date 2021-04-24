import styled from 'styled-components';
import Users from './Components/Users/Users';
import Card from './Components/Card/Card';
import { useState } from 'react';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  text-align: center;
  background-color: #274360;
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
      <Users onLiftingState={liftUsersStateHandler} onCleanList={cleanUsersHandler}></Users>
      <Card items={arrData} onCleanUser={deleteCardItemHandler}></Card>
    </AppContainer>
  );
}

export default App;
