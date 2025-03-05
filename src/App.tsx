import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CalenderPage from "./pages/CalenderPage";
import SearchPage from "./pages/SearchPage";
import AddSongPage from "./pages/AddSongPage";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route element={<Layout />}>
          <Route path="/calender" element={<CalenderPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/add-song" element={<AddSongPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
