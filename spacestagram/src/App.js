import "./App.css";
import { useEffect, useState } from "react";
import Image from "./components/Image";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=DEMO_KEY"
    )
      .then((res) => res.json())
      .then((data) => setImages(data.photos));
  }, []);

  return (
    <div className="App">
      {images.map(({ id, img_src }) => (
        <Image key={id} url={img_src} />
      ))}
    </div>
  );
}

export default App;
