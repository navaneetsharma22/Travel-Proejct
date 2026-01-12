import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  function readmoreHandlere() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt={name} />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <p className="description">
          {typeof info === "string"
            ? readmore
              ? info
              : `${info.substring(0, 200)}...`
            : "No description available"}
          <span className="read-more" onClick={readmoreHandlere}>
            {readmore ? " Show less" : " Read more"}
          </span>
        </p>
      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
