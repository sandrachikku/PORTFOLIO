import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 py-24 px-6 ">
  <div className="text-center md:text-left ml-8">
    <h1 className="text-2xl md:text-4xl lg:text-5xl">I'm</h1><br />
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic ">
      Sandra <span className="block md:inline">Satheesan</span>
    </h1> <br />
    <p className="text-lg md:text-2xl">Full Stack Developer</p><br />
    <div className="px-4 py-2">
      <div className="flex  space-x-8">
      <a href="https://github.com/sandrachikku">  <button className='flex bg-white text-black p-2 rounded-3xl'><img src="/images/Github (2).jpeg" alt="GitHub" className="w-8 h-8 rounded" />GitHub</button></a>
      <a href="https://www.linkedin.com/in/sandra-satheesan-079991336">  <button className='flex bg-white text-black p-2 rounded-3xl'><img src="/images/linkdin.jpg" alt="LinkedIn" className="w-8 h-8 rounded" />LinkdIn</button></a>
      </div>
    </div>
  </div>
  <div>
    <img
      src="/images/sand.jpg"
      alt="Sandra"
      className="w-11/12  h-5/6  object-cover "
    />
  </div>
</div>
        </div>
    );
}

export default Home;



