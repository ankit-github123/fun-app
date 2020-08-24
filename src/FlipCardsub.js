import React from "react";
import pic from "./laugh-start.gif"
import "./flipcard.css";
const FlipCardsub = () => {
    return (
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <div class="card" style={{width: ""}}>
        <img src={pic} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>

      </div>
      </div>
      <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
      <button>deepaaa</button>
    </div>
  </div>
</div>
    )
}
export default FlipCardsub;