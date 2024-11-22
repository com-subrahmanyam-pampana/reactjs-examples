

# Router
1.npm install react-router-dom

# BrowserRouter:
1.The BrowserRouter component provides the foundational context for routing, allowing your application to manage URL changes, navigation, and the rendering of appropriate components based on the current route.
2.Provides Access to Hooks and Components
By wrapping your app in BrowserRouter, you enable the use of React Router hooks like:

    useNavigate (for programmatic navigation)
    useParams (for accessing route parameters)
    useLocation (for accessing current URL info)
3.BrowserRouter ensures that the URL in the browser's address bar reflects the current UI state and vice versa. It handles forward/backward navigation, page refresh, and bookmarking.

Wrap your application in a BrowserRouter component, typically in the index.js or App.js file.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

# Add routes

Inside your App.js or any central file, define routes using the Routes and Route components.
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

# Create page components

Create Page Components

Each route typically maps to a component. For example

home.js
const Home = () => <h1>Welcome to the Home Page</h1>;
export default Home;

about.js
const About = () => <h1>About Us</h1>;
export default About;

contactus.js
const Contact = () => <h1>Contact Us</h1>;
export default Contact;

# 404 Page Handling

Add a Route without a path to display a "Not Found" page for undefined routes

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<h1>404 - Page Not Found</h1>} />
</Routes>

# Redirects and Navigation

For programmatic navigation or redirects, use the useNavigate hook

const SomeComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return <button onClick={handleClick}>Go to About</button>;
};


