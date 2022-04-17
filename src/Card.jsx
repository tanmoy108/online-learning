import React from "react";

const Card = (props) =>{
return(
  <React.Fragment>
                <div className="col-md-3">
              <div className="card coursebody">
                <img
                  src={props.image}
                  className="card-img-top courseimg"
                  alt="courseposter"
                />
                <div className="card-body">
                  <h5 className="card-title coursename">
                    {props.title}
                  </h5>
                  <p className="card-text coursepara">
                    {props.paragraph}
                  </p>
                  <div className="d-flex justify-content-between">
                    <span className="coursetk">৳ {props.tk}</span>
                    <a href={props.seedetails} className="card-link coursedetails">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
  </React.Fragment>
)
}

export default Card;