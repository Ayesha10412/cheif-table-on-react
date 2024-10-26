import React from 'react';
import PropTypes from 'prop-types';
const Recipie = ({recipie, addRecipieQueue}) => {

const { short_des, name, ingredients,recipie_img, preparing_time, calories} = recipie;

    return (
       
            
            <div  class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src={recipie_img}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title ">{name}</h2>
    <p className='border-b-2'>{short_des}</p>

        <h3 className='font-bold text-xl mb-5 '>Ingredients:{ingredients.length}</h3>

<ul className=' mr-10 mb-2'>
    {
ingredients.map((item,index)=>(
    <li className='list-disc text-xs text-gray-600 mt-1 text-left' key={index}>{item}</li>
)
    )}
</ul>
   <div className='flex flex-row  gap-8 text-gray-700 text-sm mt-2 mb-4 border-t-2'>
    <p className='flex flex-row items-center gap-2 mt-2'><i class="fa-regular fa-clock"></i>{preparing_time} minutes</p>
    <p className='flex items-center gap-2 mt-2'><i class="fa-solid fa-fire"></i>{calories}</p>
   </div>
    <div class="card-actions">
      <button onClick={()=>addRecipieQueue(recipie)} class="btn rounded-full bg-[#0BE58A]">Want to Cook</button>
    </div>
  </div>


        </div>
    );
};

Recipie.propTypes={
    recipie: PropTypes.array,
    addRecipieQueue: PropTypes.func.isRequired
}


export default Recipie;