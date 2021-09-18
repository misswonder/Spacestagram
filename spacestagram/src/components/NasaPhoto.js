import React from "react";

const NasaPhoto = ({ photo, handleLike }) => {
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
        <button
          type="button"
          className="btn btn-dark"
          onClick={(e) => handleLike(photo)}
        >
          {/*  disabled={!isLiked} */}
          🤍
        </button>
      </div>
    </div>
  );
};

export default NasaPhoto;
