import React from "react";
import pic from "./laugh-start.gif";
import FlipCardsub from "./FlipCardsub";
const FlipCard = () => {
  return (
    <div className="row container-fluid">
      <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        <FlipCardsub />
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        <FlipCardsub />
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        <FlipCardsub />
      </div>
    </div>
  );
};

export default FlipCard;
