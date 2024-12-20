import React from 'react';

const Education = () => {
    return (
        <div>
            <div className="px-4 sm:px-8 lg:px-24 py-10 mb-28">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl italic font-serif font-bold mb-10 sm:mb-16 text-center">Education</h1>
  <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-10 lg:gap-24 px-4 sm:px-8 lg:px-32 px-64 py-32">
    
    
    <div className="w-full lg:w-1/2 py-8" data-aos="fade-right" data-aos-delay="100">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">Degree Course</div>
      <div className="text-xl sm:text-2xl lg:text-3xl italic text-gray-600 mb-6">Bachelor of Computer Application</div>
      <div className="text-lg sm:text-xl lg:text-2xl font-serif font-bold">
        <div>University: <span className="font-normal">MG University</span></div>
        <div>Period of Study: <span className="font-normal">2021-2024</span></div>
      </div>
    </div>

    <div className="w-full lg:w-1/2 py-8" data-aos="fade-left" data-aos-delay="200">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">Internship</div>
      <div className="text-xl sm:text-2xl lg:text-3xl italic text-gray-600 mb-6">MERN Stack Developer</div>
      <div className="text-lg sm:text-xl lg:text-2xl font-serif font-bold">
        <div>Period of Study: <span className="font-normal">Jun/2024 - Dec/2024</span></div>
      </div>
    </div>

  </div>
</div>
        </div>
    );
}

export default Education;
