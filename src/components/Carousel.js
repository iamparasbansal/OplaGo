import React, { useState } from "react";
import Card from "./Card";

export const Carousel = (props) => {
  const [size, setSize] = useState(window.innerWidth);
  const func = () => {
    setSize(window.innerWidth);
  };
  window.onresize = func;

  return (
    <>
      {size > 768 ? (
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                {props.carouselData.map((cardData) => {
                  return (
                    <div className="col-md-4">
                      <div className="single-box">
                        <Card
                          timeline={cardData.timeline}
                          heading={cardData.heading}
                          liveClasses={cardData.liveClasses}
                          questions={cardData.questions}
                          notes={cardData.notes}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                {props.carouselData.map((cardData) => {
                  return (
                    <div className="col-md-4">
                      <div className="single-box">
                        <Card
                          timeline={cardData.timeline}
                          heading={cardData.heading}
                          liveClasses={cardData.liveClasses}
                          questions={cardData.questions}
                          notes={cardData.notes}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {props.carouselData.map((cardData) => {
              return (
                <div className="col-md-4">
                  <div className="single-box">
                    <Card
                      timeline={cardData.timeline}
                      heading={cardData.heading}
                      liveClasses={cardData.liveClasses}
                      questions={cardData.questions}
                      notes={cardData.notes}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
