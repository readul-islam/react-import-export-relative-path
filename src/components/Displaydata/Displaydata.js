import React from 'react';
import { add, multi } from '../CommonEx/Commonex'; 
//../ means relative path


const Displaydata = () => {
    const num1 = 10;
    const num2 = 30;

    const total = add(num1, num2);
    const mutiple = multi(num1, num2);
    
    return (
        <div>
        <h1>total {total} world</h1>
        <h2>this is multiple {mutiple}</h2>
        
        </div>
    );
};

export default Displaydata;