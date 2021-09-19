import React from "react";
import { useState } from "react";

const NasaPhoto = ({ photo }) => {

  const [isLiked, updateLike] = useState(false);

  const handleLike = () => {
    if(isLiked) {
      return updateLike(false);
    } else {
      return updateLike(true);
    }
  };

  return (
    <div class="card bg-light">
      <img
        className="card-img-top img-thumbnail"
        src={photo.img_src}
        alt="Card"
      />
      <div className="card-body">
        <h5 className="card-title">{`${
          photo.rover.name + " rover - " + photo.camera.full_name
        }`}</h5>
        <h6 className="card-date">{photo.earth_date}</h6>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={(e) => handleLike()}
        >
        { isLiked ? "❤️" : "🤍" }
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default NasaPhoto;
