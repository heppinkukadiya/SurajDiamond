import './App.css';
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import AddProduct from "./pages/admin/AddProduct";
import ProtectedRoute from "./pages/component/ProtrctedRoute";
import AdminLogin from "./pages/admin/AdminLogin";

function App() {
    return (
        <Routes>
            <Route path="admin/java/login" element={<AdminLogin/>}/>

            <Route path="/admin/java" element={
                <ProtectedRoute>
                    <Admin />
                </ProtectedRoute>
            } />
            <Route path="/admin/java/AddProduct" element={
                <ProtectedRoute>
                    <AddProduct />
                </ProtectedRoute>
            } />
        </Routes>
    );
}

export default App;
