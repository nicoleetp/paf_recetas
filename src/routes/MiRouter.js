import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecetaCard } from "../components/RecetaCard";
import { Detalle } from "../components/Detalle";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecetaCard />} />
        <Route path="/detalle/:image" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes;