import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home/Home";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import DesktopOnly from "./shared/DesktopOnly";
// import Spotlight from "./pages/Spotlight/Spotlight";
import Handbook from "./pages/Handbook/Handbook";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <DesktopOnly>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spotlight" element={<UnderConstruction />} />
        <Route path="/handbook" element={<Handbook />} />
        <Route path="/map" element={<UnderConstruction />} />
      </Routes>
    </DesktopOnly>
  </BrowserRouter>,
);
