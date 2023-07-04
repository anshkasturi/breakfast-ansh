import './style.css';
import HomePage from "./pages/HomePage";
import FullPost from "./pages/FullPost";
import TestContent from "./components/TestContent";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/post/:id" element={<FullPost />}></Route>
          <Route path="/testcontent" element={<TestContent />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
