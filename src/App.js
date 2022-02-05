import './App.css';
import Login from './Login';
import { BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";
import Chat from './Chat';


function App() {
  return (
    <BrowserRouter>
            {/* <Header></Header> */}

            <Routes>
            <Route path="/chat" element={<Chat/>} />
              <Route path="/login" element={<Login />} />

            </Routes>

          </BrowserRouter>
  );
}

export default App;
