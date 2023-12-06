function AboutBusiness() {
    const sections = [
      {
        title: "WHY US?",
        description:
          "Geo experts are essential, that's why we choose our clients carefully. We want to give each of you the focus and guidance that you need. If you're seeking a strategic alliance with the right party, a certain skill set, or a tool, give us a call right away. Together, we'll create and refine your success strategy. We didn't get there alone. And neither will you.",
        image: "images/PhD2-300x300.jpg",
        align: "left",
      },
      {
        title: "OUR APPROACH",
        description:
          "We provide a suite of top-notch geophysical services that will aid in the swift and efficient completion of your projects. Our service also includes a comprehensive consult to help identify gaps and opportunities, a comprehensive report that includes a project plan with timelines and milestones, a cost analysis, and a schedule. That's how we ensure your success.",
        image: "images/Field1-300x300.jpg",
        align: "right",
      },
      {
        title: "OUR BUSINESS",
        description:
          "After 15 years in the multidisciplinary, data-driven, and integrated geoscience, we decided to take a different path. We now spread our passion by giving back to others. Our ramp-up plan aims to empower your team and provide them with the tools they need to be productive. Contact us right now to discuss how we can help you expand, reduce turnover, and place yourself on a sure path to success and profit.",
        image: "images/Field2-300x300.jpg",
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
              {section.align === "right" && (
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
            </div>
          </section>
        ))}
      </div>
    );
  }
  
  export default AboutBusiness;
  