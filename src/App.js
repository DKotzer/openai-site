import "./App.css";
import Navigation from "./components/Navigation";
import ProductDescription from "./components/ProductDescription";
import Home from "./components/Home";
import Tweets from "./components/Tweets";
import ColdEmails from "./components/ColdEmails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=''>
        <Navigation />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route
            path='/product-description'
            exact
            element={<ProductDescription />}
          />
          <Route path='/cold-emails' exact element={<ColdEmails />} />
          <Route path='/tweets' exact element={<Tweets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
