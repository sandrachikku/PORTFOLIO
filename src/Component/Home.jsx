import React from 'react';

const Home = () => {
    return (
        <div>
             <div class="bg-[url('/images/bg6.jpg')] bg-cover  h-screen">
        <nav class="space-x-40 text-2xl text-center border-2 border-black-500 rounded p-8 shadow-sm bg-white bg-opacity-70">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Education</a>
          <a href="">Project</a>
          <a href="">Contact</a>
        </nav>
        <div class="px-24 py-64  text-gray-50">
          <h1 class="text-3xl">I'm</h1><br />
          <h1 class="text-7xl italic font-serif">Sandra Satheesan</h1><br />
          <p class="text-3xl">Full Stack Developer</p>
        </div>
        </div>
        </div>
    );
}

export default Home;
