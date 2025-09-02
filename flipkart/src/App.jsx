import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SearchPage from "./components/Pages/SearchPage";
import Headset from "./components/Pages/Headset/Headset";
import Filters from "./components/Pages/Headset/Filters/Filters";
import SortContext from "./components/Pages/Headset/Sort&Map-context/SortContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="headset" element={<Headset />} />
        <Route
          path="headset/filter"
          element={
            <SortContext>
              <Filters />
            </SortContext>
          }
        />
      </Routes>
    </>
  );
}

export default App;
