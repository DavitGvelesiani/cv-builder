import { Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Welcome />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    </Routes>
  );
}

export default App;
