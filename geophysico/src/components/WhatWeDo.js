import React, { useState } from "react";
import whatWeDo from "../common/constants/whatWeDo.json"

const WhatWeDo = () => {
    const [sections] = useState(whatWeDo);
  
    return (
      <div>
        {sections.map((section, index) => (
          <section className="container" key={index}>
            <div className="row">
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
            </div>
          </section>
        ))}
      </div>
    );
  }
  
  export default WhatWeDo;
  