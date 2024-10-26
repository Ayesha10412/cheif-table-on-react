import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Sidebar = ({recipieQueue}) => {


    return (
        <div className='md:w-1/3 border-2 border-gray-200 rounded-xl'>

<h2 className='w-[60%] mx-auto  font-bold text-black text-2xl text-center mt-5 border-b-2 p-1'>
    Want to Cook: {recipieQueue.length} </h2>
{/* want to cook table */}
<div class="overflow-x-auto ">
  <table class="table">
 
     <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody className='bg-slate-50'>
    {
        recipieQueue.map((recipie, index)=> <tr className='hover' key={index}>
        <th>{index + 1}</th>
        <td>{recipie.name}</td>
        <td> {recipie.preparing_time} </td>
        <td> {recipie.calories} </td>
        <td><button className='btn bg-[#0BE58A] text-black font-bold text-xs rounded-full'>Preparing</button></td>
      </tr>)
    }
      
    </tbody>
  </table>
</div>

        </div>
    );
};

Sidebar.prototype={
    recipieQueue: PropTypes.object.isRequired
}

export default Sidebar;