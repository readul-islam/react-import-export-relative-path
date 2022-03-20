import React, { useEffect, useState } from 'react';

const Fakejson = () => {
    const [info. setInfo] = useState([]);
 useEffect(()=>{
     fetch()
     .then(res => res.json())
     .then (data => console.log(data))
 },[])
    return (
        <div>
            <h1>create fack api</h1>
        </div>
    );
};

export default Fakejson;