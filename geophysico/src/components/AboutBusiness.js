import React, { useState } from "react";
import aboutBusiness from "../common/constants/aboutBusiness.json"

const AboutBusiness = () => {
    const [sections] = useState(aboutBusiness);

    return (
      <div>
        {sections.map((section, index) => (
          <section className="container" key={index}>
            <div className="row">
              {section.alignment === "right" && (
                <>
                  <div className="col-md-6 align-self-center">
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={section.image}
                      className="img-fluid rounded-circle rounded-outline"
                      alt={section.title}
                    />
                  </div>
                </>
              )}
              {section.alignment === "left" && (
                <>
                  <div className="col-md-6">
                    <img
                      src={section.image}
                      className="img-fluid rounded-circle rounded-outline"
                      alt={section.title}
                    />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
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