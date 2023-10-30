import React from "react";

function Rating({ rating, setRate }) {
  const rate = [1, 2, 3, 4, 5];
  return (
    <div>
      {rate.map((el) =>
        rating < el ? (
          <i className="fa-regular fa-star"></i>
        ) : (
          <i className="fa-solid fa-star"  onClick={()=>setRate(el)}></i>
        )
      )}
    </div>
  );
}

export default Rating;
