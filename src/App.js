import { MapContextProvider } from "./contexts/Map";

import Map from "./components/Map";
import Article from "./components/Article";

import "leaflet/dist/leaflet.css";
import "./App.css";

const App = () => {
  return (
    <MapContextProvider>
      <section className="flex">
        <Article />
        <Map />
      </section>
    </MapContextProvider>
  );
};

export default App;
