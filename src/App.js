import { Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import PrivateInfo from "./pages/PrivateInfo";
import Welcome from "./pages/Welcome";
import UserContextProvider from "./store/UserContext";
import Education from "./pages/Education";
import Completed from "./pages/Completed";

function App() {
  return (
    <UserContextProvider>
      <Routes>     
        <Route path="/" >
          <Route index element={<Welcome />} />
          <Route path="private-info" element={<PrivateInfo />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="completed" element={<Completed />} />
        </Route>
        
      </Routes>
    </UserContextProvider>
  );
}

export default App;
