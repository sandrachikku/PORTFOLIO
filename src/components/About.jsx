import React from 'react';

const Profile = () => {
  return (
    <div className="py-16 px-4 bg-black">
      <h1 className="text-3xl md:text-4xl lg:text-6xl italic font-serif font-bold text-center mb-12">
        Profile
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-36 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="relative flex justify-center w-full lg:w-1/2">
          <div className="relative">
            <img
              src="/images/1.jpg"
              alt="Profile 1"
              className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-cover shadow-lg"
              data-aos="fade-down"
              data-aos-delay="100"
            />
            <img
              src="/images/2.jpg"
              alt="Profile 2"
              className="relative mt-16 md:mt-20 lg:mt-32 ml-8 md:ml-12 lg:ml-20 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-cover shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-justify w-full">
          <p className="text-lg md:text-xl leading-relaxed">
            Aspiring MERN Stack Developer eager to kickstart a career in web development. Passionate about building
            dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in creating interactive
            and user-friendly websites with a strong interest in developing complete full-stack applications. A Bachelor
            of Computer Applications (BCA) graduate, committed to enhancing problem-solving skills, learning new
            technologies, and applying creativity to real-world projects. Enthusiastic about collaborating with teams
            and contributing to innovative web development solutions.
          </p>

          {/* Skills Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8">
            <div className="border-2 border-red-300 rounded p-4 px-6 border-dotted text-center">
              <img
                src="/images/_JavaScript Hex sticker_ Sticker for Sale by Stick Erify.jpeg"
                alt="Backend Developer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto"
              />
              <div className="py-2 italic font-serif font-bold">
                Backend <br />
                Developer
              </div>
            </div>
            <div className="border-2 border-red-300 rounded p-4 px-6 border-dotted text-center">
              <img
                src="/images/reactdev.jpeg"
                alt="React Developer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto"
              />
              <div className="py-2 italic font-serif font-bold">
                React <br />
                Developer
              </div>
            </div>
            <div className="border-2 border-red-300 rounded p-4 px-6 border-dotted text-center">
              <img
                src="/images/coding website logo_favicon.jpeg"
                alt="Web Developer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto"
              />
              <div className="py-2 italic font-serif font-bold">
                Web <br />
                Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
