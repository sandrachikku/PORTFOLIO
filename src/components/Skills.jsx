import React from 'react';

const Skills = () => {
    return (
        <div>
            <div className="px-6 lg:px-24  pb-72">
  <h1 className="text-3xl md:text-4xl lg:text-6xl italic font-serif font-bold mb-12 text-center">Skills</h1>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-36 py-10">
  {[
  { img: "html.jpeg", label: "HTML" },
  { img: "Css.jpeg", label: "CSS" },
  { img: "Bootstrap.jpeg", label: "Bootstrap" },
  { img: "js.jpeg", label: "JavaScript" },
  { img: "node.jpeg", label: "Node.js" },
  { img: "express.jpg", label: "Express" },
  { img: "react.jpg", label: "React" },
  { img: "Mongodb.jpeg", label: "MongoDB" },
  { img: "Tailwind Css.jpeg", label: "Tailwind CSS" },
].map((skill, idx) => (
  <div
    key={idx} // Use the index as a fallback key
    className="text-center"
    data-aos="fade-up"
    data-aos-delay={idx * 100}
  >
    <img
      src={`/images/${skill.img}`}
      alt={skill.label}
      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full mx-auto shadow-lg"
    />
    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">{skill.label}</h2>
  </div>
))}

  </div>
</div>
        </div>
    );
}

export default Skills;





  