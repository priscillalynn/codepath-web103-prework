import "./App.css";
import { BrowserRouter, useRoutes, Routes, Route } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import DeleteCreator from "./pages/DeleteCreator";
import { supabase } from "./client";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('creatorverse')
          .select('*');
        
        if (error) {
          console.error('Error fetching data:', error.message);
          return;
        }

        // Do something with the data, such as updating state
        console.log(data);
      } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run the effect only once


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
