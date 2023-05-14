import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { MainPage } from "./pages/MainPage";
import DetailsPage from "./pages/DetailsPage";
import FavoritePage from "./pages/FavoritePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/book/:id" element={<DetailsPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
