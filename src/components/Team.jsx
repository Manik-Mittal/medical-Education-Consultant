import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>About the Founder</h2>
          <p>
          
Introducing the visionary founder behind Medical Education Consultants, Rajnish Mittal. With a deep passion for empowering aspiring medical professionals, Rajnish embarked on a mission to bridge the gap between Indian students and their dreams of pursuing MBBS abroad. Rajnish brings a wealth of expertise to guide students through the intricate process of international admissions. Their unwavering commitment to educational excellence, coupled with a profound understanding of the challenges students may face, has positioned him as a trusted leader in the field. Their dedication to transforming educational aspirations into reality has been instrumental in establishing Medical Education Consultants as a beacon of support and guidance for students on their journey to a successful medical career abroad.
          </p>
        </div>
        {/* <div id="row">
          {props.data ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
