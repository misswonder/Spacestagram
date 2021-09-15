import React from "react";

const NasaPhoto = ({ photo }) => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
          <div class="card-deck">
            <div class="card bg-light">
              <img class="card-img-top" class="img-thumbnail" src={photo.img_src} alt="Card image" />
              <div class="card-body">
                <h5 class="card-title">{`${
                  photo.rover.name + " rover - " + photo.camera.full_name
                }`}</h5>
                <h6 class="card-date">{photo.earth_date}</h6>
                <p>Description</p>
                <a href="#" class="btn btn-primary">
                  Like
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NasaPhoto;
