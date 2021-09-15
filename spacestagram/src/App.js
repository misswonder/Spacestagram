import "./App.css";
import { useEffect, useState } from "react";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=DEMO_KEY"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos));
  }, []);

  return (
    <div className="App">
      <div class="container">
        <h1>Spacestagram</h1>
        <h6>Brough to you by NASA's image API </h6>
        {photos.map((photo) => (
          <NasaPhoto key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default App;
