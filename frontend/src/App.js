import './App.css';
import {Route, Routes} from "react-router-dom";
import Admin from "./pages/admin/admin";
import AddProduct from "./pages/admin/AddProduct";

function App() {
    return (
            <Routes>
                <Route path="/admin/java"
                       element={<Admin/>}
                />
                <Route path="/admin/java/AddProduct" element={<AddProduct />} />
            </Routes>

    )
}

export default App;
