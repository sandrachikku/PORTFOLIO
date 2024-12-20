import React from 'react';

const Project = () => {
    return (
        <div>
            <div className="px-6 sm:px-12 lg:px-24">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl italic font-serif font-bold text-center mb-12">Projects</h1>
    <div className="py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">

       
        <div className=" shadow-lg p-6 rounded-lg text-center" data-aos="fade-left" data-aos-delay="200">
            <img src="/images/Instagram.jpeg" alt="Instagram" className="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
            <h1 className="text-xl lg:text-2xl font-bold text-white">Instagram</h1>
            
        </div>

        <div className="shadow-lg p-6 rounded-lg text-center" data-aos="fade-right" data-aos-delay="200">
            <img src="/images/Flipkart.jpeg" alt="Flipkart" className="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
            <h1 className="text-xl lg:text-2xl font-bold text-white">Flipkart</h1>
            
        </div>

        <div className="shadow-lg p-6 rounded-lg text-center" data-aos="fade-left" data-aos-delay="200">
            <img src="/images/bookmy.jpg" alt="BookMyShow" className="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
            <h1 className="text-xl lg:text-2xl font-bold text-white">BookMyShow</h1>
            
        </div>

       
        <div className=" shadow-lg p-6 rounded-lg text-center" data-aos="fade-right" data-aos-delay="200">
            <img src="/images/weather.jpg" alt="Weather" className="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
            <h1 className="text-xl lg:text-2xl font-bold text-white ">Weather</h1>
            
        </div>

        
        <div className="shadow-lg p-6 rounded-lg text-center" data-aos="fade-up" data-aos-delay="200">
            <img src="/images/Olx.jpeg" alt="Olx" className="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
            <h1 className="text-xl lg:text-2xl font-bold text-white">Olx</h1>
           
        </div>
    </div>
</div> 
        </div>
    );
}

export default Project;
