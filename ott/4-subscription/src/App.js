import React from "react";
import {  Routes, Route,Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import VideoPlayerPage from "./pages/movies/VideoPlayerPage"
import SubscriptionPlans from "./pages/Subscription/Subscription"
function App() {
  return (
   <div>
     {/* Navigation */}
     <nav>
        <Link to="/home">Home</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/subscription-plans">Subscribe Now </Link>

        
      </nav>
     <Routes>
     <Route  path="/" element={<SigninPage />} />
        <Route  path="/home" element={<HomePage />} />
        <Route  path="/signin" element={<SigninPage />} />
        <Route  path="/signup" element={<SignupPage />} />
        <Route  path="/video-player" element={<VideoPlayerPage />} />

        <Route  path="/subscription-plans" element={<SubscriptionPlans />} />
        SubscriptionPlans
        
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
   </div>
  );
}

export default App;
