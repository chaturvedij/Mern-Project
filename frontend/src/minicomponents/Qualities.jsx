import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Community development is a collaborative process aimed at improving the well-being and quality of life within a specific geographical area. It involves empowering community members to identify their needs, aspirations, and strengths, and working together to address challenges and seize opportunities. ",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Transparency is a collaborative process aimed at improving the well-being and quality of life within a specific geographical area. It involves empowering community members to identify their needs, aspirations, and strengths, and working together to address challenges and seize opportunities. ",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT DEVELOPMENT",
      description:
        "Impact development is a collaborative process aimed at improving the well-being and quality of life within a specific geographical area. It involves empowering community members to identify their needs, aspirations, and strengths, and working together to address challenges and seize opportunities. ",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="img-wrapper">
                  <img src={element.image} alt={element.title} />
                </div>
                <div className="content">
                  <p className="title">{element.title}</p>
                  <p className="description">{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
