import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Create from "./components/CRUD/Create";
import Get from "./components/CRUD/Get";
import Update from "./components/CRUD/Update";
import Delete from "./components/CRUD/Delete";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Get />} />
                <Route path="/create" element={<Create />} />
                <Route path="/get" element={<Get />} />
                <Route path="/update" element={<Update />} />
                <Route path="/delete" element={<Delete />} />
            </Routes>
        </>
    );
}

export default App;