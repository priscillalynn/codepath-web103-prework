import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import CreatorForm from "../src/pages/CreatorForm.jsx";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="creatorform" element={<CreatorForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;