import React from 'react';

const Banner = () => {
    return (
        <div className= "relative  opacity-85 bg-gradient-r from-[#150b2b11] to-[#270b2b19] mt-20">
  
  {/* <div
  class="hero min-h-screen"
  style="background-image: url('');">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}

    <img className='h-[600px] bg-cover w-full rounded-xl' src="/public/handsome-chef-jugglery-with-vegetable.jpg" alt="" />

 <div class=" absolute bottom-52 left-80 mb-4">
      <h1 class="mb-5 text-5xl font-bold text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p class="mb-6 text-white">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.
      </p>
      <button class="btn  bg-[#0BE58A] text-black border-none rounded-full font-bold">Explore Now</button>
      <button class="btn  border-2 border-white rounded-full bg-transparent font-bold">Our Feedback</button>

    </div>


</div>

       
    );
};

export default Banner;