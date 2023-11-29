function WhatWeDo() {
    const sections = [
      {
        image: "images/Me1-300x300.jpg",
        title: "ALL ABOUT YOU",
        description:
          "We offer a multidisciplinary understanding and plan for achieving your goals. We are prepared to work with you at any level, from assisting with project proposals to managing the full project completion process. Our data gathering, processing, and interpretation services, or independent, unbiased advice, will help you find solutions to real-world problems.",
        align: "left",
      },
      {
        image: "images/OurExp2-300x300.jpg",
        title: "THE TECHNICAL STUFF",
        description:
          "Whether you're just putting together a proposal, performing fieldwork, or doing data analysis, we've got you covered. 'Analyze, Identify, Advise, and Execute' is our motto. Creating relationships rather than doing business is our main objective. We guarantee to be available to you whenever queries or problems arise.",
        align: "right",
      },
      {
        image: "images/OurExp1-300x300.jpg",
        title: "OUR EXPERTISE",
        description:
          "We are a group of geophysicists, geologists, surveyors, data scientists, and strategists that like sharing their expertise with others to address real-world problems. Our experience demonstrates that productive collaboration and transparent communication will improve your bottom line.",
        align: "left",
      },
    ];
  
    return (
      <div>
        {sections.map((section, index) => (
          <section className="container" key={index}>
            <div className="row">
              {section.align === "left" && (
                <>
                  <div className="col-md-6">
                    <img
                      src={section.image}
                      className="img-fluid rounded-circle rounded-outline"
                      alt="Geophysico Image"
                    />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </>
              )}
              {section.align === "right" && (
                <>
                  <div className="col-md-6 align-self-center">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={section.image}
                      className="img-fluid rounded-circle rounded-outline"
                      alt="Geophysico Image"
                    />
                  </div>
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    );
  }
  
  export default WhatWeDo;
  