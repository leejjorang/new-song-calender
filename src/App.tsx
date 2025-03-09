import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./components/Layout/Layout";
import CalenderPage from "./pages/CalenderPage";
import SearchPage from "./pages/SearchPage";
import AddSongPage from "./pages/AddSongPage";
import StartPage from "./pages/StartPage";
import EditSongPage from "./pages/EditSongPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route element={<Layout />}>
            <Route path="/calender" element={<CalenderPage />} />
            <Route path="/search/:day" element={<SearchPage />} />
            <Route path="/add-song/:day/:videoId" element={<AddSongPage />} />
            <Route path="/edit-song/:day" element={<EditSongPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
