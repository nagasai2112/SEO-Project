import React from 'react';
import './Results.css';

const Results = ({ keywords = [], title = "Sample Video Title", description = "This is an auto-generated SEO optimized description." }) => {
  return (
    <div className="results-page">
      <div className="results-container">
        <h2>Generated Results</h2>
        
        <div className="result-block">
          <h3>📌 Title</h3>
          <p>{title}</p>
        </div>

        <div className="result-block">
          <h3>📝 Description</h3>
          <p>{description}</p>
        </div>

        <div className="result-block">
          <h3>🔑 Keywords</h3>
          <div className="keywords">
            {keywords.length > 0 ? (
              keywords.map((word, index) => (
                <span key={index} className="keyword">
                  #{word}
                </span>
              ))
            ) : (
              <p>No keywords found. Please upload a video.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
