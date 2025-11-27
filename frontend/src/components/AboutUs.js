import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>SEOlytix</strong>, your AI-powered SEO assistant for videos! 
          We empower creators and businesses to maximize their reach with smart{" "}
          <strong>keywords, hashtags, and descriptions</strong> that boost rankings.
        </p>
        
        <div className="features">
          <div className="feature-card">
            <h3>🚀 AI-Driven SEO</h3>
            <p>Analyze video content and extract insights automatically.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Optimized Metadata</h3>
            <p>Generate high-ranking descriptions & tags in one click.</p>
          </div>
          <div className="feature-card">
            <h3>📢 One-Click Upload</h3>
            <p>Seamlessly post videos to YouTube with SEO tagging.</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Engagement Tracking</h3>
            <p>Monitor user interactions and celebrate milestones.</p>
          </div>
        </div>

        <p className="cta">
          Let AI handle your SEO while you focus on <strong>creating amazing content</strong>!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
