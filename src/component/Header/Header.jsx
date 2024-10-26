import React from 'react';

const Header = () => {
    return (
        <div className='flex items-center justify-between'>

<h3 className='text-3xl font-bold text-black'>Recipie Calories</h3>
<div className='text-lg text-black gap-3 flex items-center'><a href="">Home</a>
<a href="">Recipies</a>
<a href="">About</a>
<a href="">Search</a>
</div>
<div className='flex items-center gap-2'>
<label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      fill-rule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clip-rule="evenodd" />
  </svg>
</label>
<button className='w-14 h-14 rounded-full bg-[#0BE58A] text-2xl '><i class="fa-regular fa-user"></i></button>
</div>
        </div>
    );
};

export default Header;