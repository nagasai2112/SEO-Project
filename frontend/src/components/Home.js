import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Boost Your Video SEO with AI</h1>
        <p>Optimize your videos with AI-generated keywords, descriptions, and hashtags.</p>
        <Link to="/login">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>

      <section className="features-section">
        <div className="feature">
          <h3>🚀 AI-Driven SEO</h3>
          <p>Automatically generate high-ranking keywords and descriptions.</p>
        </div>
        <div className="feature">
          <h3>📊 Performance Tracking</h3>
          <p>Monitor your video’s ranking and engagement in real-time.</p>
        </div>
        <div className="feature">
          <h3>🎯 Optimized Hashtags</h3>
          <p>Improve discoverability with AI-generated hashtags.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
