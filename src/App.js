import './App.css';
import React, { useState, useEffect } from 'react';
import ListOfSpaceXLaunches from './components/molecules/ListOfSpaceXLaunches';
import styled from 'styled-components'

function App() {

  const [spacexData, setSpacexData] = useState([]);
  
  const getSpacexData = async() => {
    const response = await fetch('https://api.spacexdata.com/v5/launches');
    const data = await response.json()
    setSpacexData(data);
  }

  useEffect(() => {
    getSpacexData();
  }, []);

  return (
    <div className="App">
      <StyledAppContainer>
      <h1>SpaceX Launches in 2022 and beyond</h1>
      {spacexData.length > 0 && <ListOfSpaceXLaunches spacexData = {spacexData} />}
      </StyledAppContainer>
    </div>
  );
}

export default App;

const StyledAppContainer = styled.div`
color: #fff;
background-color: #262626;
padding: 10px;
`