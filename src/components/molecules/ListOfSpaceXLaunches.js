
import React, { useState, useEffect } from 'react';
import LaunchCard from '../atoms/LaunchCard';
import styled from 'styled-components';



const ListOfSpaceXLaunches = ({ spacexData }) => {

    const upcomingLaunches = spacexData.filter(launch => launch.upcoming === true);

    return (
        <SyledContainer> 
            {upcomingLaunches.map(data => (
                <LaunchCard launchData={data} key={data.flight_number}/>
            ))} 
        </SyledContainer>
    )
}

export default ListOfSpaceXLaunches;

const SyledContainer = styled.div`
    background-color: #262626;`
