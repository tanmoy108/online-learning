import React from "react";

const Common = (props) => {
  return (
    <React.Fragment>
      <section className="topbody d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center flex-column">
              <h2 className="mb-3">{props.title}</h2>
              <p className="mb-3">
               {props.paragraph}
              </p>
              <a className="btn getbutton" href="/Service">
                {props.buttonvalue}
              </a>
            </div>
            <div className="col-md-6">
              <img
                src={props.imagevalue}
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Common;
