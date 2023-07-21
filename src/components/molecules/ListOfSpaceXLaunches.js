import React, { useState, useEffect } from 'react';
import LaunchCard from '../atoms/LaunchCard'

const ListOfSpaceXLaunches = ({ spacexData }) => {
    return (
        <>
        {spacexData.length > 0 && spacexData.map(data => (
            <LaunchCard LaunchData={data} />
        ))}    
        </> 
    )
}

export default ListOfSpaceXLaunches;
