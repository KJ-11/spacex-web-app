import React, { useState, useEffect } from 'react';

const LaunchCard = ({ data }) => {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.flight_number}</p>
            <p>{data.date_local}</p>
        </div>   
    )
}

export default LaunchCard;
