import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import DeleteCreator from "./pages/DeleteCreator";
import CreatorPage from "./pages/CreatorPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="addcreator" element={<AddCreator />} />
          <Route path="editcreator" element={<EditCreator />} />
          <Route path="viewcreator" element={<ViewCreator />} />
          <Route path="/creator/:id" component={CreatorPage} />
          <Route path="deletecreator" element={<DeleteCreator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;