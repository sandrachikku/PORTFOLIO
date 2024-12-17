import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="py-28">
    <h1 className="text-3xl md:text-4xl lg:text-6xl italic font-serif font-bold mb-6 text-center">Profile</h1>
    <div className='flex space-x-52 px-24 py-24 '>
    
 
  <div className="relative flex justify-center lg:justify-end  ">
    <div className="relative">
      <img
        src="/images/1.jpg"
        alt=""
        className="absolute top-0 left-0 w-32 h-28 md:w-40 md:h-40 lg:w-64 lg:h-64 object-cover  shadow-lg"
        data-aos="fade-down" data-aos-delay="100"
      />
      <img
        src="/images/2.jpg"
        alt=""
        className="relative mt-28 lg:mt-36 ml-12 lg:ml-40 w-32 h-28 md:w-40 md:h-40 lg:w-64 lg:h-64 object-cover  shadow-lg"
        data-aos="fade-up" data-aos-delay="100"
      />
    </div>
  </div>

  <div className='text-justify'> 
    <p className="text-2xl md:text-lg lg:text-xl leading-relaxed text-justify text-left max-w-5xl  py-8">
    Aspiring MERN Stack Developer eager to kickstart a career in web development. Passionate about building 
    dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in creating interactive
     and user-friendly websites with a strong interest in developing complete full-stack applications. A Bachelor of
      Computer Applications (BCA) graduate, committed to enhancing problem-solving skills, learning new technologies, 
      and applying creativity to real-world projects. Enthusiastic about collaborating with teams and contributing to 
      innovative web development solutions.
    </p>
    <div className='flex space-x-24 px-28'>
      <div className='border-2 border-red-300 rounded p-4 px-8 border-dotted'>
        <img src="/images/_JavaScript Hex sticker_ Sticker for Sale by Stick Erify.jpeg" alt=""  className='w-20 h-20 rounded-full'/>
      <div className='py-4 italic font-serif font-bold text-center'>Backend <br />Developer</div>
      </div>
      <div className='border-2 border-red-300 rounded p-4 px-8 border-dotted'>
        <img src="/images/reactdev.jpeg" alt=""  className='w-20 h-20 rounded-full'/>
        <div className='py-4 italic font-serif font-bold text-center'>React <br />Developer</div>
        </div>
      <div className='border-2 border-red-300 rounded p-4 px-8 border-dotted'>
        <img src="/images/coding website logo_favicon.jpeg" alt="" className='w-20 h-20 rounded-full'/>
        <div className='py-4 italic font-serif font-bold text-center'>Web <br />Developer</div>
      </div>
    </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Profile;
