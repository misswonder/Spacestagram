import "./App.css";
import { useEffect, useState } from "react";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${process.env.REACT_APP_NASA_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Spacestagram</h1>
        <h6 className="subheader">Brough to you by NASA's image API</h6>
        <div className="row">
          {photos.map((photo) => (
            <div key={photo.id} className="col-md-6">
              <NasaPhoto photo={photo} />
            </div>
          ))}
        </div>
      </div>
      {loading && (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )}
    </div>
  );
}

export default App;
