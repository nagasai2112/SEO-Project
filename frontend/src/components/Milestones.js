import React from "react";
import "../styles/Milestones.css"; // Ensure the correct path

const Milestones = () => {
  return (
    <div className="milestones-container">
      <h2>Our Milestones</h2>
      <p>
        We are on a journey to revolutionize **SEO for videos**!  
        Here are some of the major milestones we’ve achieved along the way:
      </p>

      <div className="milestone-list">
        <div className="milestone">
          <h3>🚀 1K+ Videos Optimized</h3>
          <p>Our AI-powered SEO has optimized over 1,000 videos with high-ranking keywords.</p>
        </div>

        <div className="milestone">
          <h3>📢 500+ Successful YouTube Uploads</h3>
          <p>Seamless video publishing with **SEO tagging** has helped creators rank higher.</p>
        </div>

        <div className="milestone">
          <h3>🌟 10K+ Keywords Generated</h3>
          <p>We’ve generated over **10,000 smart SEO keywords and hashtags** for better reach.</p>
        </div>

        <div className="milestone">
          <h3>🏆 Community Growth</h3>
          <p>Thousands of users trust us for their **SEO optimization needs**.</p>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
