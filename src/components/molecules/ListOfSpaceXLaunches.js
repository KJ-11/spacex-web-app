
import React, { useState, useEffect } from 'react';
import LaunchCard from '../atoms/LaunchCard'



const ListOfSpaceXLaunches = ({ spacexData }) => {

    const upcomingLaunches = spacexData.filter(launch => launch.upcoming === true);

    return (
        <>
            {upcomingLaunches.map(data => (
                <LaunchCard launchData={data} key={data.flight_number}/>
            ))}    
        </> 
    )
}

export default ListOfSpaceXLaunches;
