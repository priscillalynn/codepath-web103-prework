import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import DeleteCreator from "./pages/DeleteCreator";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="addcreator" element={<AddCreator />} />
          <Route path="editcreator" element={<EditCreator />} />
          <Route path="viewcreator" element={<ViewCreator />} />
          <Route path="deletecreator" element={<DeleteCreator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;