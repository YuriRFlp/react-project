import styled from 'styled-components';
import Users from './Components/Users/Users';
import Card from './Components/Card/Card';
import { useState } from 'react';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
`;

const App = () => {
  const [arrData, setArrData] = useState('');

  const liftUsersStateHandler = enteredData => {
    setArrData( (prevArrData) => {
      [enteredData, ...prevArrData];
    });
  }

  return (
    <AppContainer>
      <Users onLiftingState={liftUsersStateHandler}></Users>
      <Card items={arrData}></Card>
    </AppContainer>
  );
}

export default App;
