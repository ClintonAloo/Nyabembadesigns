import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error, SharedLayouts } from "./pages";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<h1>about</h1>} />
            <Route path="/products" element={<h1>products</h1>} />
            <Route path="/products/:id" element={<h1>single product</h1>} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
