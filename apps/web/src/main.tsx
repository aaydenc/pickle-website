import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Home/Home";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import Spotlight from "./pages/Spotlight/Spotlight";
import Handbook from "./pages/Handbook/Handbook";
import Apply from "./pages/Apply/Apply";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/construction" element={<UnderConstruction />} />
      <Route path="/spotlight" element={<Spotlight />} />
      <Route path="/handbook" element={<Handbook />} />
      <Route path="/apply" element={<Apply />} />
    </Routes>
  </BrowserRouter>,
);
