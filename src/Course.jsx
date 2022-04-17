import React from "react";
import Card from "./Card";
import Coursedb from "./Coursedb";

const Course = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="my-5 courseheading" >Our Courses</h2>
        <section className="courses">
          <div className="row gy-4">
            {Coursedb.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.courseimage}
                  title={value.coursetitle}
                  paragraph={value.coursepara}
                  tk={value.amount}
                  seedetails={value.amount}
                />
              );
            })}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Course;
