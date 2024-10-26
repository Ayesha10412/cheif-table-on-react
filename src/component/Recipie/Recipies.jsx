import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Recipie from './Recipie';
const Recipies = ({addRecipieQueue}) => {

const [recipies, setRecipies] = useState([])

useEffect(()=>{
    fetch('/public/Data.json')
    .then(res=>res.json())
    .then(data=>setRecipies(data))
} ,[])

    return (
        <div className='md:w-2/3'>
            <h2>Recipies:{recipies.length}</h2>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        
{

recipies.map(recipie=> <Recipie key={recipie.recipie_id} recipie={recipie} addRecipieQueue={addRecipieQueue}></Recipie>)


    }

</div>


        </div>
    );
};

Recipies.proptypes={

recipies: PropTypes.array,
addRecipieQueue: PropTypes.func.isRequired
}

export default Recipies;